let cities = require('../data/us-cities-table.json');

console.log(`There are ${cities.length} cities in the array.`);

// Which state has the most cities on the list?

/*
Get information about a state, and 
then subproperties of cities in that state

Group by state
Count the cities in each state

Properties we want out of each object
usps => state
name => city

*/

/*
cities.sort((c1, c2) => {
	return c1.usps.localeCompare(c2.usps);
});
*/

function customSort(city1, city2) {
	console.log(`Sorting ${city1.usps} against ${city2.usps}`);
	return city1.usps.localeCompare(city2.usps);
}

cities.sort(customSort);

// let texasCount = 0;
let cityCount = new Map();

for (let city of cities) {
	if (!cityCount.has(city.usps)) {
		cityCount.set(city.usps, 0);
	}

	let currentCount = cityCount.get(city.usps);
	cityCount.set(city.usps, currentCount + 1);
}

for (let [state, count] of cityCount) {
	console.log(`${state}: ${count}`);
}

/*
// stateCount looks like [NJ: 4]
for (let stateCount of cityCount) {
	// console.log(`${stateCount[0]}: ${stateCount[1]}`);
	console.log(stateCount);
}
*/

/*
for (let state of cityCount.keys()) {
	console.log(`${state}: ${cityCount.get(state)}`);
}
*/
