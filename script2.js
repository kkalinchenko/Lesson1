/***1***/
var user = {};
user.name = 'Chris';
user.surname = 'Simons';
user.name = 'Brain';
delete user.name;

/***2***/
var car = {};
car.model = 'BMV';
car.speed = 70;
car.run = function() {
	console.log(this.model + ' ' + 'едет со скоростью' + ' ' + this.speed);
};
car.stop = function() {
	console.log(this.model + ' ' + 'остановилась');
};
/***/
var car = {};
car['speed'] = 'BMV';
car['speed'] = 70;
car['run'] = function() {
	console.log(this.model + ' ' + 'едет со скоростью' + ' ' + this.speed);
};
car['stop'] = function() {
	console.log(this.model + ' ' + 'остановилась');
};
/***/
var car = {
	model: 'BMV',
	speed: 70,
	run: function() {
		console.log(this.model + ' ' + 'едет со скоростью' + ' ' + this.speed);
	},
	stop: function() {
		console.log(this.model + ' ' + 'остановилась');
	}
}

/***3***/
var tv = {
	currentChannel: 1,
	nextChannel: function() {
		currentChannel++;
	},
	previousChannel: function() {
		currentChannel--;
	},
	setChannel: function(number) {
		currentChannel = number;
	}
}

/***5***/
var worker = [
	{
		name: 'John',
	 	age: 28,
	  experience: 1, 
	  languages:['Java', 'JavaScript', 'SQL']
	},
	{
		name: 'Bill',
	 	age: 30,
	  experience: 5, 
	  languages:['HTML', 'CSS', 'JavaScript']
	},
	{
		name: 'Mike',
	 	age: 32,
	  experience: 4, 
	  languages:['Python', 'SQL']	
	}
]

/***6***/
var person = {
	// key: 1
};

function isEmpty(obj){
	for(var key in obj){
		return false;
	}

	return true;
}

console.log(isEmpty(person));

/***7***/
var salaries = {
   "John": 100,
   "Bill": 300,
   "Mike": 250
};

var salaries = {
   "Cris": 150,
   "Brain": 600,
   "John": 300,
   "Steve": 400,
   "Bill": 50
};

function averageSalary (obj) {
	var sum = 0;
	for(var key in obj){
		sum += obj[key];
	}
	return sum/2;
}

console.log(averageSalary(salaries));

/***1***/

function CreateCar (model, speed){
	this.model = model;
	this.speed = speed;
	this.run = function() {
		console.log(this.model + ' ' + 'едет со скоростью' + ' ' + this.speed);
	};
	this.stop = function() {
		console.log(this.model + ' ' + 'остановилась');
	};
}

var car = new CreateCar('Lada', 80);

/***2***/
function averageSalary (obj) {
	var sum = 0;
	for(var key in obj){
		sum += obj[key];
	}
	return sum/2;
}

console.log(averageSalary(salaries));

/***3***/
function CreateTV () {
	this.currentChannel = 1;
	this.nextChannel = function () {
		this.currentChannel++;
	};
	this.previousChannel = function() {
		this.currentChannel--;
	};
	this.setChannel = function(number) {
		this.currentChannel = number;
	};
}

var tv = new CreateTV();

/***4***/
var calculator = {
	read: function(){
		this.first 	= parseInt(prompt('Enter first number','')),
		this.second = parseInt(prompt('Enter second number', ''));
	},
	sum: function(){
		return this.first + this.second;
	},
	mul : function() {
		return this.first * this.second;
	}
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/***5***/
function mul() {
	var mul = 1, count = 0;
	for(var i = 0; i < arguments.length; i++){
		if(parseInt(arguments[i])){
			mul *= arguments[i];
			count++;
		}
	}
	return (count > 0) ? mul : 0;
}
console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str' , false, true)); // 0

/***6***/
var country = {
   name: "Украина",
   language: "украинский",
   capital: {
      name: "Киев",
      population: 2907817,
      area: 847.66
   }
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // <Украина>
format.apply(country, ['[',']']); // [Украина]
format.call(country.capital, '"', '"'); // "Киев"
format.apply(country.capital,['','']); // Киев
