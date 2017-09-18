/***1***/
(function() {
	var arr = ["Джаз", "Блюз"];
	arr.push("Рок-н-Ролл");
	arr[arr.length-2] = 'Классика';
	arr.unshift("Рэп", "Регги");
	console.log(arr);
}())

/***2***/
var arr = [5, 1, 4, 2, 3];

Array.prototype.sortDesc = function() {
		var sorted = true;
		while(sorted){
			for(var i = 0; i < this.length; i++){
				if(this[i+1] > this[i]){
					swap(this, i+1, i);
					sorted = false;
					}
				sorted = !sorted;
			}
		}

		function swap(arr, a, b){
			var tmp = arr[a];
			arr[a] = arr[b];
			arr[b] = tmp;
		}
};
arr.sortDesc(arr);
console.log(arr); // [5, 4, 3, 2, 1]

/***3***/
function deleteEvenNumbers(array) {
   var oddArr = array.filter(function(item) {
   	return item % 2 !== 0 ;
   })
   return oddArr;
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]

/***4***/
var arr = ["Tom", "Sam", "Bob"];

var arrLength = arr.map(function(item) {
	return "<li>" + item + "</li>"
})

console.log(arrLength); 

/***5***/ need rewritting
function matrixToArray(matrix) {
  var a =	matrix.reduce(function(accum, item) {
  	item = item.toString().split(',').join('');
   	return accum +=item;
   }, '')
  a = a.split('');
  a = a.map(function(item){
  	return parseInt(item);
  })

  return a;
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
н