const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


// Function 1: findMatching
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

// Function 2: fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
};

// Function 3: matchName
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
};

//  the functions for testing
console.log(drivers);
console.log(findMatching(drivers,'bobby'));
console.log(fuzzyMatch(drivers,'sam'));
console.log(matchName(drivers,'Bobby'));
// Code your solution here
