let fields = [ "building", "street", "locality", "landmark", "vtc", "subdistrict", "district", "pincode", "state"];

// 1. Check - If request body is empty. GOOD FOR SECURITY
module.exports.isEmpty = function isEmpty(req, res, next) {

	// Separate log of one request from another
	console.log('-------------');

	// Main function starts here
	let obj = req.body;
	for(let key in obj) {
	    if(obj.hasOwnProperty(key)){
		console.log('No Empty Request : ✅');
		next();
		return;
	    }
	}
	res.send('You made an empty request 😆');
	console.log('Empty Request : ❌');
}

// 2. Check - if number of fields are nine. --UNUSED--
module.exports.isNumberOfFields = function isNumberOfFields(req, res, next){
	
	let count = Object.keys(req.body).length;
	if(count == 9){
		console.log('Number of fields : ✅');
		next();
	} 
	else {
		console.log('Number of fields : ❌');
		res.send('Please send 9 fields, you may keep them empty 😀');
	}
}

// 3. Check - if fields are correct. GOOD FOR SECURITY
module.exports.isCorrectField = function isCorrectField(req, res, next){

	let obj = req.body;
	let flag = true;
	for(let key in obj) {
		if (flag) {
			switch(key){
				case 'building':
				case 'street':
				case 'locality':
				case 'landmark':
				case 'vtc':
				case 'subdistrict':
				case 'district':
				case 'pincode':
				case 'state':
				break;
				default: flag = false;
			}
		} else {
			break;
		}
		
	}
	
	if (flag) {
		console.log("All fields are correct : ✅");
		next();
		
	} else {
		console.log('Field Incorrect : ❌');
		res.send('One of your field name is incorrect or may have spelling mistake. Check Once 😀');
	}
	

}

// 4. Check - if fields are in-order --UNUSED--
module.exports.isInOrder = function isInOrder(req, res, next){

	let obj = req.body;
	let index = 0;
	let flag = true;
	for(key in obj){
		if(key == fields[index]){
			index++;
		}
		else{
			flag = false;
			break;
		}
	}
	
	if(flag){
		console.log("Fields are inorder : ✅");
		next();
	}
	else{
		console.log("Fields are not inorder : ❌");
		res.send("Your fields are not in order 😕");
	}

}