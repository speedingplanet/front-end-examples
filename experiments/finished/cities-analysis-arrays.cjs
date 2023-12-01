let cities = require('../../data/us-cities-table.json');

// Which state has the most cities on the list?

// Go through cities, extract only the states
let states = cities.map((city) => city.usps);

// states is ['NY', 'CA', 'TX', 'FL', ... etc]

/* 
A reducer function lets us carry information from one iteration to the next
We use it to dynamically build a state to count object literal like this:
{
	NY: 5,
	CA: 20,
	TX: 10,
	FL: 5,
	etc.
}
*/

let stateCount = states.reduce((stateCount, state) => {
	// If we have not seen this state before, initialize its count to zero
	if (!stateCount[state]) {
		stateCount[state] = 0;
	}

	// Increment the count
	stateCount[state]++;

	// Return the updated object to the next iteration of the reducer
	return stateCount;
}, {});

// Which state has the highest count?
let highestCount = 0;
let highestState = '';

// Many options for iteration here, but for..of coupled to Object.entries works well
for (let [state, count] of Object.entries(stateCount)) {
	if (count > highestCount) {
		highestState = state;
		highestCount = count;
	}
}

console.log(`${highestState} has the most cities with ${highestCount}`);
