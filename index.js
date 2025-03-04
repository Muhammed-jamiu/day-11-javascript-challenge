// Destructuring and Spread
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

const users = { name: "Musa", age: 29, state: "kogi state" };
let { name, age, state, gender } = users;
console.log(state);

const nums = [1, 2, 3];
let [num1, , num3] = numbers; //2 is omitted
console.log(num1, num3);

const numsa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [nu1, nu2, nu3, ...rest] = numsa;
console.log(nu1, nu2, nu3);
console.log(rest);
