/***2***/
var str = 'Login1,LOgin2,login3,loGin4';
str = str.toLowerCase();
str = str.split(',');

/***3***/
(function() {
	var arr = [], 
	dict = {};
	while(true){
		var a = prompt('Для заверщения ввода введите "end"', '');
		if(a === 'end'){
			break;
		} else{
			arr.push(a);
		}
	}

	arr.forEach(function(item, index){
		var a = item.split('');
		var number = a.some(function(val) {
			return !isNaN(parseInt(val))
		})
		if(number){
			dict[item] = 'Numbers: ' + item;
		} else{
			dict[item] = 'No numbers ' item;
		}
	})

	console.log(dict);
}())

/***3***/
var currentDate = new Date();

function addTwoDays(date){
	date.setHours(48);
	return date.toDateString();
}

console.log(addTwoDays(currentDate));

/***4***/
function sumSliceArray (arr, first, second) {
	function validate (val) {
		return !isNaN(parseInt(value)) && val < arr.length;
	}

  try {
  	if(validate(first) && validate(second)){
  	  return arr[first] + arr[second];
  	} else {
  	  throw new Error('Превышен диапазон допустимых значений или не соответствует тип значения');
  	}
  } catch (error) {
      console.log(error.name);
      console.log(error.message);
  }

}

function useSum (arr, callback) {
	
}

sumSliceArray([1,2,3,4], 'str', 5);

/***5***/