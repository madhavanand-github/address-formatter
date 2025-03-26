const serpApi = require('google-search-results-nodejs');

// Global hard, soft & unique fields
let fieldType = {
	"building" : "hard",
	"street" : "hard",
	"locality" : "hard",
	"landmark" : "hard",
	"vtc" : "soft",
	"subdistrict" : "soft",
	"district" : "unique",
	"pincode" : "unique",
	"state" : "unique"
}

// Fields Type of current request
let hardFields = [];
let softFields = [];
let uniqueFields = [];
let finalObj ;
let helpObj = {};

// Removes the null or empty fields
module.exports.emptyFieldParser = function emptyFieldParser(req, res, next){

	finalObj = req.body;
	for(let key in finalObj){
		if(finalObj[key] == "" || finalObj[key] == null){
			delete finalObj[key];
			continue;
		}
	}
	console.log("Null and Empty Fields Removed : 1️⃣");
	next();

}

// Fields Type Parser
module.exports.fieldTypeParser = function fieldTypeParser(req, res, next){

	for(let key in finalObj){
		switch(fieldType[key]){
			case "hard": hardFields.push(key); break;
			case "soft": softFields.push(key); break;
			case "unique": uniqueFields.push(key); break;
		}
	}
	console.log("Field Type Parsed : 2️⃣");
	next();
}

// Parses Unique and Soft Fields
module.exports.uniqueSoft = function uniqueSoft(req, res, next){

	// Unique Field Processing
	if(uniqueFields.length != 0){
		for(let index in uniqueFields){
			let temp = finalObj[uniqueFields[index]];
			helpObj[(temp.toString()).toLowerCase()] = 1;
		}
	}

	// Soft Field Processing
	if(softFields.length != 0){
		for(let index in softFields){
			let temp = finalObj[softFields[index]];
			if(helpObj[(temp.toString()).toLowerCase()] == 1){
				delete finalObj[softFields[index]];
			};
		}
	}

	console.log("Unique & Soft Fields Parsed 3️⃣");

	// Special Case - VTC & Sub-district
	if(softFields.length == 2){
		delete finalObj.subdistrict;
		console.log("Special VTC & Sub-District Triggered 🔥");
	}
		
	next();
}

// Serp - To fix spelling mistake & local language
module.exports.serpUpdate = function serpUpdate(req, res, next){

	for(let index in hardFields){
		if(hardFields[index] != 'building'){
			let query = finalObj[hardFields[index]]
			const params = {
				q: query.replace(/#/g,"").trim().replace(/\s+/g," ").toLowerCase(),
				hl: "en",
				gl: "in"
			};
			const callback = function(data) {
				console.log(data.search_information);
				if(data.search_information.spelling_fix != undefined){
					finalObj[hardFields[index]] = data.search_information.spelling_fix;
			}
			search.json(params, callback); 
		      };
		}
	}
	console.log("SERP Update Failed & Skipped 🪲");
	next();
}

// Parses the hard Fields	
module.exports.hardParser = function hardParser(req, res){

	if(hardFields.length != 0){
		for(let index in hardFields){
			let string = finalObj[hardFields[index]];
			let array = breakString(cleanString(string));
		}
	}
}

// This removes the extra spaces or special characters.
function cleanString(string){
	return string.replace(/#/g,"").trim().replace(/\s+/g," ").toLowerCase();
}

// This breaks the string into words.
function breakString(string){
	return string.split(/[\s,]+/);
}

// Function to make first letter capital of a string.
function capitalFL(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Are Single Characters in array
function areSingleChars(string){
	let count = 0, maxCount = 0;
	string.forEach(element => {
		if(element.length == 1){
			count += 1;
		}else{
			count = 0;
		}
		maxCount = Math.max(maxCount, count);
	});
	if (maxCount > 1) {
		return true;
	}
	return false;
}

// Join Single Chars -- PEN

// Repetitive Remover
function repRemover(array){

	let final = array;
	for(let i in array){
		if(helpObj[array[i]] == undefined){
			helpObj[(array[i].toString()).toLowerCase()] = 1;
		}
		else{
			let removeIndex = final.indexOf(array[i]);
			final.splice(removeIndex, 1);
		}
	}
	return final;
}


