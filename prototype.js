/***Proto***/

function Human(name, age){
	this.name = name;
	this.age = age;
}

Human.prototype = (function(){
	var obj = {};

	function _validateAge(age){
		return typeof age === 'number' && age > 0;
	}

	function _getAge() {
    return _validateAge(this.age) ? this.age : 'invalid age';
	}

	obj.displayAge = function() {
		var a = _getAge.call(this);
		if(typeof a == 'string'){
			console.log(a);
		} else{
		console.log(this.name + ' age' + '-' +  a);
		}	
	}
	obj.sayHello = function() {
		console.log('Hello' + this.name);
	};

	return obj;

}());

// var human = new Human('Karina', 30);
function Worker(name, age, company){
	Human.call(this, name, age);
	this.company = company;
}

Worker.prototype = (function(){
	var obj = {};

	function countExperience(yearStart, yearEnd){
		if(isPositiveNumber(yearStart) && isPositiveNumber(yearEnd) && (yearEnd > yearStart)){
			return yearEnd - yearStart;
		}
		return 'Invalid data';
	}

	function isPositiveNumber(value){
		return typeof value === 'number' && value > 0; 
	}

	obj.displayExperience = function(yearStart, yearEnd) {
		console.log(countExperience.call(this, yearStart, yearEnd));
	}

	obj.displayCompany = function() {
		console.log(this.name + ' work at ' + this.company);
	}

	obj.__proto__ = Human.prototype;

	return obj;
}());

var worker = new Worker('Karina', 20, 'Epam');
worker.displayExperience(2010, 2017);
worker.displayAge();
console.dir(worker);

/***Observer***/

