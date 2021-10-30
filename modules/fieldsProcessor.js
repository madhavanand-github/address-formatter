// Global hard, soft & unique fields
let fieldType = {
	"building" : "hard",
	"street" : "hard",
	"locality" : "hard",
	"landmark" : "hard",
	"vtc" : "soft",
	"sub-district" : "soft",
	"district" : "unique",
	"pincode" : "unique",
	"state" : "unique"
}

// Fields Type of current request
let nonEmptyFields = [];
let hardFields = [];
let softFields = [];
let uniqueFields = [];
let finalObj;

// Creates an array of fields(with non-empty value) needs to be processed.
module.exports.emptyFieldParser = function emptyFieldParser(req, res){

	finalObj = req.body;
	for(let key in finalObj){
		if(finalObj[key] == "" || finalObj[key] == null){
			delete finalObj[key];
			continue;
		}
		nonEmptyFields.push(key);
	}
	console.log("Null and Empty Fields Removed : 1️⃣");
	res.send("All is well 😀");

}

// Fields Type Parser
module.exports.fieldTypeParser = function fieldTypeParser(req, res){

	let obj = req.body;
	for(let key in obj){
		switch(fieldType[key]){
			case "hard": hardFields.push(key);
			case "soft": softFields.push(key);
			case "hard": uniqueFields.push(key);
		}
	}
}