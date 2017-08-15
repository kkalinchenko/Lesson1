/***1***/
// function add(x, y) {
// 	return x + y;
// }

// var add = function(x, y) {
// 	return x + y;
// }

// add();

// /***2***/
// function createArrayIterator(array) {
//    var i = 0;
//    return	function(){
//    	return array[i++];
//    }
// }

// var arr = [5, 6, 7];
// var itr = createArrayIterator(arr);
// console.log(itr()); // 5
// console.log(itr()); // 6
// console.log(itr()); // 7
// console.log(itr()); // undefined

/***3***/
 function safeCalculating () {
 	var p = 0, s = 0;

 	function validate(side){
 		return !isNaN(parseInt(side)) && side > 0;
 	}

 	return function(side1, side2) {
 		if(validate(side1) && validate(side2)){
 			p = 2*(side1 + side2);
 			s = side1 * side2;
 		}
 		return {
 			p : p,
 			s : s
 		}
 	}
 }
 var p = safeCalculating();
 console.log(p(3,4));
 console.log(p(-3,4));

 /***4***/

 function digitSum(k){
 	var num = k%10,  sum = 0;
 	if(k <= 0){
 		return num;
 	} else {
 		return  num += digitSum((k - num)/10);
 	}
 }

 console.log(digitSum(2431));

 /***5***/

function format(data, type) {
  if(type === 'number'){
   		format = function(){
   		return parseInt(data);
   	}
  }	else if(type ==='boolean'){
   		format = function() {
   		return Boolean(data);
 		}	
 	}	else if(type ==='string'){
   		format = function(argument) {
   			return data.toString();
  		}
  }
}
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"




