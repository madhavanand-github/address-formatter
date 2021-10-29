module.exports.allChecksPassed = function allChecksPassed(req,res){ 

	let fieldCheck = isNumberOfFields(req, res);
	if(fieldCheck){
		console.log('All check passed : 👍');
		return true;
	}
	else{
		return false;
	}
	
}

//  Check if number of fields are nine
function isNumberOfFields(req, res){
	let count = Object.keys(req.body).length;
	if(count == 9){
		console.log('Number of fields : ✅');
		return true;
	} 
	else {
		console.log('Number of fields : ❌');
		res.send('Number of fields are incorrect or you may have duplicate fields 😕');
		return false;
	}
}

//