// event loop: call stack, web api, callback queue/message queue/task queue
// microtask queue -  higher priority

// function foo() {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// }
// console.log("before");

// foo();
// foo();

// 1 3 5 4 2
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 0);
// const a = new Promise((resolve, reject) => {
//   // not async
//   resolve(1);
// }).then(() => console.log(6));
// console.log(5);

// function foo() {
//   for (var i = 0; i < 5; i++) {
//     // iife
//     (function () {
//       var num = i;
//       setTimeout(() => {
//         console.log(num);
//       }, num * 1000);
//     })();
//   }
// }

// foo();

// const getData = (id, cb) => {
//   setTimeout(() => {
//     const data = "first response";
//     cb(data);
//   }, 1000);
// };
// const getData2 = (id, cb) => {
//   setTimeout(() => {
//     const data = "second response";
//     cb(data);
//   }, 1000);
// };
// const getData3 = (id, cb) => {
//   setTimeout(() => {
//     const data = "third response";
//     cb(data);
//   }, 1000);
// };

// // callback hell
// getData(1, (data) => {
//   console.log(data);
//   getData2(2, (data) => {
//     console.log(data);
//     getData3(3, (data) => {
//       console.log(data);
//       getData3(3, (data) => {
//         console.log(data);
//         getData3(3, (data) => {
//           console.log(data);
//           getData3(3, (data) => {
//             console.log(data);
//             getData3(3, (data) => {
//               console.log(data);
//             });
//           });
//         });
//       });
//     });
//   });
// });

// promise
// pending, fulfilled, rejected

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//     // reject(1);
//     // throw new Error("new error");
//   }, 1000);
// });

// p.then(
//   (data1) => {
//     console.log(data);
//     throw Error("new error");

//     // return new Promise((res, reject) => {
//     //   reject(2);
//     // });
//   },
//   (err) => {
//     console.log("handle error in .then:", err);
//   }
// )
//   .then((data2) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// async / await
// async function foo() {
//   try{

//     const data = await new Promise((resolve, reject) => {
//       resolve(1);
//     });
//     const response = await getData(data);

//     console.log(data);
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// foo();

// const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/3");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);

//     return values.map((value) => value.json());
//   })
//   .then((values) => {
//     console.log(values);
//   });
// // Expected output: Array [3, 42, "foo"]
