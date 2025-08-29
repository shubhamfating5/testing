// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements in the array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding an element
fruits.push('Orange');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Orange']

// Removing the last element
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Iterating through the array
fruits.forEach((fruit) => {
    console.log(fruit);
});