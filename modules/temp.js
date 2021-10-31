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
let uniqueFields = ["building"]
let finalObj = {
	"building" : "hard",
	"street" : "hard",
};

// let ans = "madhav   andnd";
// console.log(ans.replace((\\s+/)/g," "));


let string = "opp,Silk Exchange Board";
console.log(string.replace(/#/g,"").trim().replace(/\s+/g," ").toLowerCase());

function stringBreaker(string){
	let newString = string.replace(/#/g,"").trim().replace(/\s+/g," ").toLowerCase();
	return newString.split(/[\s,]+/);
}

console.log(stringBreaker(string));
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