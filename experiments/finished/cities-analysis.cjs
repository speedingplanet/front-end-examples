let cities = require('../data/us-cities-table.json');
console.log(`There are ${cities.length} cities in the array.`);

// Which state has the most cities on the list?

// Maps are data structures that store key-value pairs
let cityCount = new Map();

// Iterate over cities
for (let city of cities) {
	// Have we seen this state before? If not, add it to the Map
	if (!cityCount.has(city.usps)) {
		cityCount.set(city.usps, 0);
	}

	// Increment the count for this state by one
	let currentCount = cityCount.get(city.usps);
	cityCount.set(city.usps, currentCount + 1);
}

// Who has the highest count?
let highestCount = 0;
let highestState = '';

// Iterate over the Map of states paired to counts
for (let [state, count] of cityCount) {
	// If this count is higher than the previous record, store it
	if (count > highestCount) {
		highestState = state;
		highestCount = count;
	}
}

console.log(`${highestState} has the most cities with ${highestCount}`);
