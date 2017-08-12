"use strict";

/***1***/
// (function(argument) {
// 	var x = prompt('Enter number','');
// 	x = Number(x);
// 	if(x > 0){
// 	x++;
// 	}	else if(x < 0){
// 	x = x-2;
// 	} else{
// 	x = 10;
// 	}
// 	alert(x);
// }());


/***2***/
// (function  () {
// 	var x = -1, result = 'нулевое число';
// 	if(!x){
// 		console.log(result);

// 		return;
// 	}

// 	if(x & 1){
// 		result = 'нечетное';
// 	} else {
// 		result = 'четное';
// 	}

// 	result += ' ';
// 	result += (x > 0) ? 'положительное число' : 'отрицательное число';
// 	console.log(result);
// }());


/***3***/

(function() {
	var arr = [2, 2, 3, 2];
	arr.reduce(function(accumulator, currentValue, index){
		if (accumulator !== currentValue) {
			accumulator = currentValue;
			console.log(index + 1);
			return;
		} 
	});
	
}());


/***4***/
// (function(){
// 	var results = ['плохо', 'неудовлетворительно', 'удовлетворительно', 'хорошо', 'отлично'];
// 	var mark = parseInt(prompt('Enter mark',''));
// 	if(isNaN(mark) || mark > 5 || mark < 1){
// 		console.log('You entered invalid number');
// 		return;
// 	}
// 	console.log(results[mark-1]);

// }());


/***5***/
// (function(){
// 	var a = 10, b = 3;
// 	while(a >= b){
// 		a = a-b;
// 	}

// 	console.log(a);
// })();


/***6***/
(function() {
	var a = 123, c = 0;
	while(a > 0){
	c = a%10;
	a = (a - c)/10;
	console.log(c);
	}
}());


/***7***/

// (function(argument) {
// 	var a = 3, b = 6, c = 0;
// 	for (; a <= b; a++) {
// 		c += a;
// 	};
// 	console.log(c);
// }());


/***8***/

// (function() {
// 	var a = 5, f = 1;
// 	for(var i = 2; i <= a; i++){
// 		f *= i;
// 	}
// 	console.log(f);
// }());


/***9***/
// (function (){
// 	var arr = [];
// 	while(true){
// 		var num = prompt('Enter number', '');
// 		num = parseInt(num);
// 		if(!isNaN(num)){
// 			arr.push(num);
// 			continue;
// 		}

// 		break;
// 	}

// 	var sum = arr.length? arr.reduce(
// 		function (accumulator, currentValue) {
// 			return accumulator + currentValue;
// 		}) : 0;

// 	console.log(sum);
// }());

/***10***/
// (function() {
// 	var a = 2, b = 10, 
// 	initA = a;
// 	while(a <= b){
// 		var res = '';
// 		for(var i = 0; i < a - initA + 1; i++){
// 			res += a + ' ';
// 		}
// 		console.log(res);
// 		a++;
// 	}
// }());


/***11***/
// function pow(x, n) {
// 	if(n === 0){
// 		return 1;
// 	}

// 	for (var i = 0; i < n-1; i++) {
// 		x *=x;
// 	}

// 	return x;
// }

// console.log(pow(5,2));

/****12***/
// function minMax(x, y){
// 	return x < y ? x : y;
// }

// console.log(minMax(4,5));

/***13***/
// function sign(x) {
// 	return (x < 0) ? -1 : (!x) ? 0 : 1;
// }

// console.log(sign(parseFloat(prompt('Number',''))));

/***14***/
// function calc(a, b, op){
// 	var res = 0;
// 	switch(op){
// 		case 1:
// 			res = a-b;
// 			break;
// 		case 2:
// 			res = a*b;
// 			break;
// 		case 3:
// 			res = a/b;
// 			break;
// 		default:
// 			res = a+b;
// 	}
// 	return res;
// }

// ver 2
// var operations = [];

// operations.push(function(a, b){return a - b;});
// operations.push(function(a, b){return a * b;});
// operations.push(function(a, b){return a / b;});
// operations.push(function(a, b){return a + b;});
// operations.push(function(a, b){return Math.pow(a, b);});

// function calc2(a, b, op){
// 	return operations[op-1](a, b);
// }

// console.log(calc2(2,3,5));

/***15***/
// function digitN(k,n) {
// 	var arr = [];
// 	while(k > 0){
// 		var num = k%10;
// 		arr.push(num);
// 		k = (k - num)/10;
// 	}

// 	return (n > arr.length || n < 1)? -1 : arr[n-1];
// }
// function digitN(number, position) {
// 	var arr = number.toString().split('').reverse();
// 	return (position > arr.length || position < 1)? -1 : arr[position-1];
// }
// console.log(digitN(234,0));
// console.log(digitN(234,1));
// console.log(digitN(23423,8));
// console.log(digitN(234,3));
// console.log(digitN(234,4));