// Implement a function that takes an array of numbers and returns the sum of the squares of the even numbers.

const sumEvenSquares = (arr) => {
 const sum = arr.reduce((acc, elem) => {
  if (elem % 2 === 0) {
   return (acc += elem * elem);
  }
  return acc;
 }, 0);
 console.log(sum)
 return sum;
};

// sumEvenSquares([2, 4, 6, 8]);

// Implement a function that takes an array of objects and a property name, and returns a new array with the values of that property in each object.

let people = [
 { name: 'Alice', age: 30 },
 { name: 'Bob', age: 40 },
 { name: 'Charlie', age: 50 }
];

const pluck = (arrObjects, property) => {
return arrObjects.map(object => {
 return object[property]
})
}

console.log(pluck(people, 'age'))


