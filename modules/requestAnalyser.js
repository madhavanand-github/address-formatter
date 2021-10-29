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
module.exports.isNumberOfFields = function isNumberOfFields(req, res){
	
	let count = Object.keys(req.body).length;
	if(count == 9){
		console.log('Number of fields : ✅');
		console.log('All Good 😀');
		res.send('All Good 😀');
	} 
	else {
		console.log('Number of fields : ❌');
		res.send('Please send 9 fields, you may keep them empty 😕');
	}
}