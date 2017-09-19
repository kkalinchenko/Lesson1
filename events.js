/***1***/
var menu = document.body.children[0];
console.dir(menu);
var attrMenu = menu.getAttribute('data-widget-name');
console.log(attrMenu);

/***2***/
var table = document.getElementById('age-table');
var arr = table.getElementsByTagName('label');
console.log(arr);

var age  = table.rows[0].cells[0];
console.log(age);

var secondForm = document.forms[1];
console.log(secondForm);

var form = document.forms.search;
console.log(form);

var inputSearch = form.elements.search;
console.log(inputSearch);

var inputWithoutPosition = document.getElementsByName('info[0]');
console.log(inputWithoutPosition);

var inputWithPosition = secondForm.elements['info[0]'];
console.log(inputWithPosition);

/***3***/
var form = document.forms[0];

var button = document.createElement('button');
button.type = 'submit';
button.name = 'button';
button.innerText = 'button';

form.appendChild(button);

/***4***/
function insertAfter(elem, refElem) {
	var next = refElem.nextElementSibling;
	var parent = refElem.parentElement;
	if(next){
		parent.insertBefore(elem, next);
	} else{
		parent.appendChild(elem);
	}
}
var e = document.createElement("div");
e.innerHTML = "<b>Новый элемент</b>";
var b = document.body;

insertAfter(e, b.firstElementChild); // Вставка после первого элемента
// insertAfter(e, b.lastElementChild); // Вставка за последним элементом

/***5***/
function remove(elem) { 
 var parent = elem.parentElement;
 parent.removeChild(elem);
}
var e = document.body.children[0];
remove(e); // Удаление элемента

/***6***/
var buttons = document.getElementsByTagName('button'),
text = document.querySelector('#color');
var colorChoose = {
	addSubcribers : function(color, callback){
		this.__subcribers.push({
			color : color,
			func : callback
		})
	},
	__subcribers : [],
	__invokeSubcribers : function() {
		Array.prototype.forEach.call(this.__subcribers, function(obj) {
			Array.prototype.forEach.call(buttons, function(btn) {
				if(btn.innerHTML === obj.color){
					btn.onclick = obj.func;
				}
			})
		})
	}

}
   
function redSubcriber() {
	text.style.color = 'red';
}
function blueSubcriber() {
	text.style.color = 'blue';
}

function resetSubscriber() {
	text.style.color = '';
}

colorChoose.addSubcribers('Красный', redSubcriber);
colorChoose.addSubcribers('Синий', blueSubcriber);
colorChoose.addSubcribers('Сброс', resetSubscriber);
colorChoose.__invokeSubcribers();