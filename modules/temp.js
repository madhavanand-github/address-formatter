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

let obj = {
	"building" : "",
	"street" : "aa",
	"locality" : null,
	"landmark" : "a",
}

let hardFields = [];
let softFields = [];
let uniqueFields = [];

for(let key in obj){
	switch(fieldType[key]){
		case "hard": hardFields.push(key);
		case "soft": softFields.push(key);
		case "hard": uniqueFields.push(key);
	}
}

console.log(hardFields);

// 5. Check - type of fields --DUMP--
function isFieldType(req, res){

	let obj = req.body;
	let flag = true;
	for(let i = 0; i < 9; i++){
		let prop = fields[i];
		console.log(prop);

		if(i == 7 && (typeof(obj[prop]) == "number")) {
			continue;
		}
		else {
			console.log(typeof(obj[prop]));
			flag = false;
		}
			
		if(i != 7 && (typeof(obj[prop]) == "string")) {
			continue;
		}
		else {
			console.log(typeof(obj[prop]));
			flag = false;
		}
	}

	if(flag){
		console.log("Field Typed Passed : ✅");
		console.log("All is well 😀");
		res.send("All is well 😀");
	}
	else{
		console.log("Field Typed Failed : ❌");
		res.send("Make sure type of fields are correct, pincode should be a number and rest string 😀");
	}
}