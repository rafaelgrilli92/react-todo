function add(a, b) {
	return a + b;
}

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Rafael', 'Bruno'];
var groupB = ['Henrique'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Rafael', 25];
var personTwo = ['Bruno', 29];

function greet(name, age) {
	console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Rafael', 'Bruno'];
var final = ['Henrique', ...names];

final.forEach((name) => {
	console.log('Hi ' + name);
})