// Module 15

// const person = {
//   name: "Koushik",
//   age: 30,
// };

// console.log(person);

// const person = {
//   name: "Koushik",
//   age: 30,
//   greet() {
//     console.log("hi,i am " + this.name);
//   },
// };

// person.greet();

// -----------------------------------------------------------
// Module 16

// const hobbies = ["sports", "gaming"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

// hobbies.push("Programming");
// console.log(hobbies);

// -----------------------------------------------------------
// Module 18
// Slice operator

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const copiedArray = [hobbies];
// console.log(copiedArray);

// const copiedArray = [...hobbies]; //spread operator
// console.log(copiedArray);

// const copiedPerson = {...person}; //spread operator
// console.log(copiedPerson);

// Rest operator
// arg -> arguments
// const toArray = (arg1, arg2, arg3) => {
//     return[arg1, arg2, arg3];
// };

// console.log(toArray(1,2,3,));

// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1,2,3,4));

// -----------------------------------------------------------
// Module 19

// const person = {
//   uname: "Koushik",
//   age: 30,
//   greet() {
//     console.log("hi,i am " + this.uname);
//   },
// };

// const printName = (personData) => {
//   console.log(personData.uname);
// };
// printName(person);

// destructuring

// Object destructuring
// const printName = ({ uname }) => {
//   console.log(uname);
// };

// printName(person);

// const { uname, age } = person;
// console.log(uname, age);

// array destructuring

// const hobbies = ["sports", "gaming"];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);
