// Destructuring and Spread
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
// console.log(numOne, numTwo, numThree);

const users = { name: "Musa", age: 29, state: "kogi state" };
let { name, age, state, gender } = users;
// console.log(state);

const nums = [1, 2, 3];
let [num1, , num3] = numbers; //2 is omitted
// console.log(num1, num3);

const numsa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [nu1, nu2, nu3, ...rest] = numsa;
// console.log(nu1, nu2, nu3);
// console.log(rest);

///Exercises: Level 1

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, humanBodyTemp, gravity, waterBoilingTemp, pi);

// 2. Destructure and assign the elements of countries array to n, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

let [n, est, sw, de, nor] = countries;
// console.log(n, est);

// 3. Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width: w, height, area, perimeter } = rectangle;
// console.log(perimeter);

//Exercises: Level 2
// 1. Iterate through the users array and get all the keys of the object using destructuring.

const copyUsers = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

copyUsers.forEach((copuser) => {
  let { name, scores, skills, age } = copuser;
  //   console.log(name, scores, skills, age);
});
// 2. Find the persons who have less than two skills.

copyUsers.filter((lessthan2) => {
  let { name, scores, skills, age } = lessthan2;
  if (skills.length < 2) {
    console.log(name, "have only one skill", skills);
    // console.log(scores, "have only one scores", scores);
  }
});

//Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries

const selfCountry = [
  {
    name: "Finland",
    capital: "fashidafrat",
    population: 20023,
    languages: "Ebira",
  },
  {
    name: "Sweden",
    capital: "fratfashida",
    population: 22023,
    languages: "Hausa",
  },
  {
    name: " Norway",
    capital: "fashida",
    population: 21003,
    languages: "igbo",
  },
];

selfCountry.forEach((self) => {
  let { name, capital, population, languages } = self;
  console.log(
    `Country: ${name}, \n Capita: ${capital}, \n Population: ${population},\n Language: ${languages}`
  );
});
// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array
// name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// 1. Write a function called convertArrayToObject which can convert the array to a structure object.
// 1. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// 2. Add Bootstrap with level 8 to the front end skill sets
// 3. Add Express with level 9 to the back end skill sets
// 4. Add SQL with level 8 to the data base skill sets
// 5. Add SQL without level to the data science skill sets
// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// console.log(name, skills, jsScore, reactScore);
// David(4)[("HTM", "CSS", "JS", "React")];
