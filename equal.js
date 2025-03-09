console.log(5 === "5");   // false (number !== string)
console.log(0 === false); // false (boolean !== number)
console.log(null === undefined); // false (different types)
console.log([] === false); // false (array !== boolean)
console.log('' === 0);     // false (string !== number)

console.log(Object.is(NaN, NaN));  // true
console.log(NaN === NaN);          // false (regular strict comparison)
console.log(Object.is(-0, +0));    // false
console.log(-0 === +0);            // true

let obj1 = { a: 1 };
let obj2 = { a: 1 };

console.log(obj1 == obj2);  // false (different memory references)
console.log(obj1 === obj2); // false (different memory references)

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2);  // false
console.log(arr1 === arr2); // false

let obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)
