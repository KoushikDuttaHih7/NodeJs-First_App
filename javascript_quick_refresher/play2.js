// Module 20

// This is asynchronous code because
// it's happending after some time
// setTimeout(() => {
//   console.log("Timer is Done!");
// }, 2000);

// This is synchronous code because it's immediately
// console.log("Hi");
// console.log("Hello");

// JavaScript doesn't wait for one function to complete
// and simply goes to the next one
// So we'll see first (Hi,Hello) and then (Timer is Done!)

// ------------------------------------------------------------------------------------------------------------

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done 1500 ms!");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer is Done 2000 ms!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// ------------------------------------------------------------------------------------------------------------

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done!");
//     }, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData()
//     .then((text) => {
//       console.log(text);
//       return fetchData();
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);
