let people = [
	{
		id: 1,
		firstName: 'Bernete',
		lastName: "O'Scully",
		city: 'Beausejour',
		state: 'Manitoba',
		country: 'Canada',
	},
	{
		id: 2,
		firstName: 'Catherin',
		lastName: 'Yon',
		city: 'Huntington',
		state: 'West Virginia',
		country: 'United States',
	},
	{
		id: 3,
		firstName: 'Deni',
		lastName: 'Bushell',
		city: 'Atlanta',
		state: 'Georgia',
		country: 'United States',
	},
	{
		id: 4,
		firstName: 'Louie',
		lastName: 'Warke',
		city: 'Honolulu',
		state: 'Hawaii',
		country: 'United States',
	},
	{
		id: 5,
		firstName: 'Cheston',
		lastName: 'Endicott',
		city: 'Lincoln',
		state: 'Nebraska',
		country: 'United States',
	},
];

/* 
***************** Shallow copies *****************
Easier on memory
Faster to copy
Harder to garbage collect
May accidentally modify data unexpectedly
*/

// Creates a shallow copy. The array is different, but the references in the array are the same
let shallowCopyPeople = [...people];

// Returns true, because the two arrays are NOT the same reference
if (shallowCopyPeople !== people) {
	console.log('shallowCopyPeople is not equal to people');
} else {
	console.log('This never happens');
}

// Returns true, because the references stored in the two arrays are the same
if (shallowCopyPeople[1] === people[1]) {
	console.log('shallowCopyPeople and people contain the same references');
} else {
	console.log('This never happens');
}

shallowCopyPeople[1].city = 'New York';
shallowCopyPeople[1].state = 'New York';

if (people[1].city === 'New York') {
	console.log(
		'We changed people[1] by changing shallowCopyPeople[1] because they both point to the same object.',
	);
} else {
	console.log('This never happens');
}

/* 
***************** Deep copies *****************
structuredClone() is a global method
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
Take up more memory (duplicated objects)
Slower to copy
Can be easier to garbage collect in some scenarios
Safe duplication of data, so you know what you're modifying
*/

let deepCopyPeople = structuredClone(people);
// Returns true, because the two arrays are NOT the same reference
if (deepCopyPeople !== people) {
	console.log('deepCopyPeople is not equal to people');
} else {
	console.log('This never happens');
}

// Returns false, because the references stored in the two arrays are different
if (deepCopyPeople[1] === people[1]) {
	console.log('This never happens');
} else {
	console.log('deepCopyPeople and people do NOT contain the same references');
}

deepCopyPeople[1].city = 'Little Rock';
deepCopyPeople[1].state = 'Arkansas';

if (people[1].city === 'Arkansas') {
	console.log('This never happens');
} else {
	console.log(
		'We changed deepCopyPeople[1], but it had no effect on people[1] because they point to different objects.',
	);
}
