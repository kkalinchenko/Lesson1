/***1***/
var head = document.documentElement.children[0];
console.log(head);

var ul = document.body.children[1];
console.log(ul);

var secondLi = ul.children[1];
console.log(secondLi);


/***2***/
var table = document.body.children[0];
console.log(table.rows.length);

var caption = table.caption;
console.log(caption);

var firstValue = table.rows[0].cells[0];
console.log(firstValue);

var secondValue = table.rows[1].cells[2];
console.log(secondValue);


/***3***/
var getFormByName = document.forms.authForm;
console.log(getFormByName);

var getFormByNumber = document.forms[0];
console.log(getFormByNumber);

var firstInput = getFormByName.children.log;
console.log(firstInput);

var button = getFormByName.children.signIn;
console.log(button);


/***4***/
var allElements = document.body.children;
var pElements = [];
for(var i = 0; i < allElements.length; i++){
	if(allElements[i].tagName === 'P'){
		pElements.push(allElements[i]);
	}
}
alert(pElements.length); // Должно вывести 3


/***5***/
var a = document.body.children[0],
b = document.body.children[1];
var tmp = a.innerHTML;
a.innerHTML = b.innerHTML;
b.innerHTML = tmp;


/***6***/
 var first = document.body.firstChild.nodeValue;
 var sec = document.body.childNodes;
 sec = sec[sec.length-2].nodeValue;
 console.log(first);
 console.log(sec);