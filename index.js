// Hello Myra/Tristan! I understand it is bad practice to leave comments with logic in the final submission, but I will be leaving mine in as I want feedback on if the pathing of my thoughts is correct more so than the code, if that makes sense. Should this be unacceptable, I will gladly resubmit a copy without them, thank you.

/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

//The above is an Array of Objects depicting a list of animals and their census. It contains a key with the name of "Kind" and another key with the name of "Count". To add a key:value in an object, one can use dot notation (animals.kind = 'Leopard').

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
//create a variable to house an originator value with which the count will be added to, should it exist.
  let number = 0
//I no value exists, it must return zero
if (animals.count = 0) {
  return 0
}
//I must loop through the array of objects, but only of the counts
for (let i = 0; i < animals.length; i++) {
  number += animals[i].count
}
  // must return a whole number, not an array
  return number
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
//The return must be an array of strings
  let allAnimals = []
//Must return an empty array if no input
if (animals.kind === '') {
  return allAnimals
}
//My loop must go thorugh each kind from the animals object
for (let i = 0; i < animals.length; i++) {
  allAnimals.push(animals[i].kind)
}

//Here I return my originally set array of strings, where the results will be placed
return allAnimals
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
//creating a blank array for where our results will be inputed and as a default value in case no entry is submitted
  let filteredCount = []
//my loop must run, and begin to check for counts that are equal or greater than the amount. I must then push said results into my new array
for (let i = 0; i < animals.length; i++) {
// an if statement is needed to check the greater than or equal to requirement. We must refer to the count   
  
  if (animals[i].count >= minimum) {
    filteredCount.push(animals[i])
  }
}

//returns all objects
return filteredCount
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
 // creating an empty object with which to push our results into and to account for if no entry is submitted 
  let commonAnimal = null;
  if (animals[0]) {
  commonAnimal = animals[0]
}
//returning our object
  return commonAnimal
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
