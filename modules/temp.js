let fields = [ "building", "street", "locality", "landmark", "vtc", "sub-district", "district", "pincode", "state"];

let obj = {
	"building" : "",
	"street" : "aa",
	"locality" : null,
	"landmark" : "a",
}

let fieldsToProcess = [];
	for(let key in obj){
		if(obj[key] == "" || obj[key] == null){
			continue;
		}
		fieldsToProcess.push(key);
	}

console.log(fieldsToProcess);

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