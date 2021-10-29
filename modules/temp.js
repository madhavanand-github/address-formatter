const fields = ['building', 'asddf'];
let object = {
		"building" : 'asdf',
		"asdddf" : 144401,
}
console.log(object.asddf);
function isEmpty(obj) {
	for(var key in obj) {
		switch(key){
			case 'building':
			case 'asddf':
			console.log("true"); break;
			default: console.log("false");
		}
	}
}

console.log(isEmpty(object))