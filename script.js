"use strict"

/***1***/

// var x = prompt('Enter number','');
// x = Number(x);
// if(x > 0){
// 	x++;
// }
// else if(x < 0){
// 	x = x-2;
// }
// else{
// 	x = 10;
// }
// alert(x);

/***2***/

// var x1 = prompt('Enter number','');
// x1 = Number(x1);
// if(x1 === 0){
// 	console.log('нулевое число');
// }
// else if(x1 > 0 && x1%2 == 0){
// 	console.log('положительное четное число');
// }
// else if(x1 > 0 && x1%2 !== 0){
// 	console.log('положительное нечетное число');
// }
// else if(x1 < 0 && x1%2 == 0){
// 	console.log('отрицательное четное число;');
// }
// else{
// 	console.log('отрицательное нечетное число');
// }

/***3***/

// var a = 1, b = 1, c = 4, d = 1;
// if(a !== b && a !== c && a !== d){
// 	console.log('1');
// }
// else if(b !== a && b !== c && b !== d){
// 	console.log('2');
// }
// else if(c !== a && c !== b && c !== d){
// 	console.log('3');
// }
// else{
// 	console.log('4');
// }

/***4***/

// var k = prompt('Enter number', '');
// k = Number(k);
// switch(k){
// 	case 1:
// 		console.log('плохо');
// 		break;
// 	case 2: 
// 		console.log('неудовлетворительно');
// 		break;
// 	case 3: 
// 		console.log('удовлетворительно');
// 		break;
// 	case 4:
// 		console.log('хорошо');
// 		break;
// 	case 5:
// 		console.log('отлично');
// 		break;
// 	default:
// 		console.log('ошибка');
// }

/***5***/

// var a = 10, b = 3, c = 0;
// while(a >= b){
// 	a = a-b;
// }

// console.log(a);

/***6***/

// var a = 123, c = 0;
// while(a > 0){
// 	c = a%10;
// 	a = (a - c)/10;
// 	console.log(c);
// }

/***7***/

// var a = 3, b = 6, c = 0;
// for (; a <= b; a++) {
// 	c += a;
// };
// console.log(c);

/***8***/

// var a = 5, f = 1;
// for(var i = 2; i <= a; i++){
// 	f *= i;
// }
// console.log(f);

/***9***/
// Тут немного не понятно
/***10***/
// var a = 2, b = 10;
// while(a <= b){
// 	for(var i = 0; i < a; i++){
// 		console.log(a);
// 	}
// 	a++;
// }

/***11***/
// function pow(x, n) {
// 	for (var i = 0; i < n-1; i++) {
// 		x *=x;
// 	};
// 	return x;
// };
// console.log(pow(5,3));

/****12***/
// function minMax(x, y){
// 	if(x < y ){
// 		return x;
// 	}
// 	else{
// 		return y;
// 	}
// };
// console.log(minMax(4,5));

/***13***/
// function sign(x) {
// 	if(x < 0){
// 		x = -1;
// 	}
// 	else if(x === 0){
// 		x = 0
// 	}
// 	else{
// 		x = 1;
// 	}
// 	return x;
// }
// console.log(sign(6));

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

// console.log(calc(2,3,2));

/***15***/
// function digitN(k,n) {
// 	var number = 0;
// 	for(var i = 0; i < n; i++){
// 		number = k%10;
// 		k = (k - number)/10;
// 	}
// 	if(k > 0){
// 		return number;
// 	}
// 	else{
// 		return -1;
// 	}
// }

// console.log(digitN(234,3));