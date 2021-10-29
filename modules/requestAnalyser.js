module.exports.allChecksPassed = function allChecksPassed(req,res){ 
	
	// Number of fields
	if(isNumberOfFields(req,res)){
		console.log('Number of fields : ✅');
	} 
	else {
		console.log('Number of fields : ❌');
		res.send('😕 Number of fields are incorrect or you have duplicate fields')
	}

}

//  Check if number of fields are nine, return boolean
function isNumberOfFields(req){
	let count = Object.keys(req.body).length;
	return count == 9;
}