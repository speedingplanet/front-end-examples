let cities = require('../../data/us-cities-table.json');

// Given an arbitrary state, return a list of all the cities in that state.

let queryState = process.argv[2];

console.log(`Looking for cities in ${queryState}.`);

// Filter for the state, get the city property only for records that have the right state

/*
let citiesForState = cities.filter((city) => {
	if (city.usps === queryState) {
		return true;
	} else {
		return false;
	}
});
*/

/*
let citiesForState = cities.filter((city) => city.usps === queryState);

citiesForState.forEach((city) => console.log(city.name));
*/

cities
	.filter((city) => city.usps === queryState)
	.forEach((city) => console.log(city.name));
