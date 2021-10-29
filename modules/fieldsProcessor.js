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
let nonEmptyFields = []; // Non-Empty Fields
let fieldsToRemove = []; // Soft + Null/Empty
let hardFields = [];
let softFields = [];
let uniqueFields = [];

module.exports.emptyFieldParser = function emptyFieldParser(req, res){

	let obj = req.body;
	for(let key in obj){
		if(obj[key] == "" || obj[key] == null){
			fieldsToRemove.push(key);
			continue;
		}
		nonEmptyFields.push(key);
	}
	console.log("Null and Empty Fields Checked : 👍");
	res.send("All is well 😀");

}