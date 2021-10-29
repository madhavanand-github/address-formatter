// 1. Check - If request body is empty.
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
	res.send('You made an empty request 😕');
	console.log('Empty Request : ❌');
}

// 2. Check - if number of fields are nine
module.exports.isNumberOfFields = function isNumberOfFields(req, res, next){
	
	let count = Object.keys(req.body).length;
	if(count == 9){
		console.log('Number of fields : ✅');
		next();
	} 
	else {
		console.log('Number of fields : ❌');
		res.send('Please send 9 fields, you may keep them empty 😕');
	}
}

// 3. Check - if fields are correct
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
				case 'sub-district':
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
		res.send('One of your field name is incorrect, check spelling mistake 😕');
	}
	

}

// 4. Check - if fields are in-order
module.exports.isInOrder = function isInOrder(req, res){

	let fields = [ "building", "street", "locality", "landmark", "vtc", "sub-district", "district", "pincode", "state"];

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
		console.log("All is well 😀");
		res.send("All is well 😀");
	}
	else{
		console.log("Fields are not inorder : ❌");
		res.send("Your fields are not in order 😕");
	}

}