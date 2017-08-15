/***1***/
var arr = [1, 3, 4, 5];
function odd(array){
	var newArr = arr.filter(function(value){
		return value & 1;
	});
	return newArr;
}

console.log(odd(arr));

/***2***/

var string = '*++++*****~+~~~~';
function leastRepetitions(string){
	var arr = string.split('');
	var dict = {};
	arr.forEach(function(value, index) {
		if(dict[value]){
			dict[value]++;
		} else{
			dict[value] = 1;
		}
	});
	var count = arr.length, result = '';
	for(var key in dict){
		if(dict[key] < count){
			count = dict[key];
			result = key;
		}
	}
	return result;
}

console.log(leastRepetitions(string));

/***3***/

function mulFifteen(num){
	return (num << 4) - num;
}
console.log(mulFifteen(10));