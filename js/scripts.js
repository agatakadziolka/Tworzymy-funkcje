// scripts.js

var a = prompt('a = ');
var h = prompt('h = ');

function getTriangleArea(a, h) {

	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	}
	else {
		console.log('Nieprawidłowe dane');
	}
}

console.log(getTriangleArea(a, h));

var zmienna1 = getTriangleArea(10,2);
var zmienna2 = getTriangleArea(4,6);
var zmienna3 = getTriangleArea(2,3);

alert(zmienna3);