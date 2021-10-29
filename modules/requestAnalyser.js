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
module.exports.isCorrectField = function isCorrectField(req, res){

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
		console.log('All Good 😀');
		res.send('All Good 😀');
	} else {
		console.log('Field Incorrect : ❌');
		res.send('One of your field name is incorrect, check spelling mistake 😕');
	}
	

}