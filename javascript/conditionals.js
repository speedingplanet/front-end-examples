let test = 10;

if (test === 10) {
	console.log('test is 10');
} else {
	console.log('test is 20');
}

/*
if (condition) { doSomething(); }
if () {} else {}
if () {} else if () {} else if () {} else {}
*/

// Ternary operator
// condition ? do if true : do if false
test === 10 ? console.log('test === 10') : console.log('test !== 10');

// test is nonzero
if (test < 0 || test > 0) {
	console.log('test is not zero');
}

// shorter version
if (test) {
	console.log('test is not zero');
	console.log('test is "truthy"');
}

// 0 is valid but null is not
if (test !== null) {
	console.log('test is not null');
}

/* eslint-disable */
// False values
const undef = undefined;
const nullValue = null;
const x = 0;
const empty = '';
const notANumber = NaN;
const booleanFalse = false;

let someVariable = 'baz';

switch (someVariable) {
	case 'foo': // if (someVariable === 'foo') {}
		console.log('Matched "foo"!');
		break;
	case 'bar':
		console.log('Matched "bar"!');
		break;
	case 'baz':
		console.log('Matched "baz"!');
		break;
	default:
		console.log('No matches!');
}
