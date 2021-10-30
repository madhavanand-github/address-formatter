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
module.exports.emptyFieldParser = function emptyFieldParser(req, res, next){

	finalObj = req.body;
	for(let key in finalObj){
		if(finalObj[key] == "" || finalObj[key] == null){
			delete finalObj[key];
			continue;
		}
		nonEmptyFields.push(key);
	}
	console.log("Null and Empty Fields Removed : 1️⃣");
	next();

}

// Fields Type Parser
module.exports.fieldTypeParser = function fieldTypeParser(req, res){

	for(let key in finalObj){
		switch(fieldType[key]){
			default : console.log(fieldType[key]);
			case "hard": hardFields.push(key); break;
			case "soft": softFields.push(key); break;
			case "unique": uniqueFields.push(key); break;
		}
	}
	console.log("Field Type Parsed : 2️⃣");
	res.send("All is well 😀")
}