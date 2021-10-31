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
let finalObj;
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
			default : console.log(fieldType[key]);
			case "hard": hardFields.push(key); break;
			case "soft": softFields.push(key); break;
			case "unique": uniqueFields.push(key); break;
		}
	}
	console.log("Field Type Parsed : 2️⃣");
	console.log(hardFields);
	console.log(softFields);
	console.log(uniqueFields);
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
		
	console.log(finalObj);
	next();
}

// Parses the hard Fields	
module.exports.hardParser = function hardParser(req, res){

	if(hardFields.length != 0){
		for(let index in hardFields){
			let temp = stringBreaker(finalObj[hardFields[index]]);
			console.log(temp);
		}
	}
	
	res.send("All is well 😀");
}

// This normalize the string & split it.
function stringBreaker(string){
	string = string.replace(/#/g,"").trim().replace(/\s+/g," ").toLowerCase();
	return string.split(/[\s,]+/);
}

// Function to make first letter capital of a string.
function capitalFL(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}