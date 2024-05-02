// ======================================= JS 1 ===================================
/**
 * primitive data types
 *
 * number
 * string
 * boolean
 * null
 * undefined
 *
 * bigint
 * symbol
 */

// console.log(typeof "1");
// console.log(typeof 1);
// var number = 1;
// console.log(typeof number);

// var obj = {};
// var arr = [];
// function foo() {}

// console.log(obj);
// console.log(typeof null);

// var obj2 = Object.create({});

// class MyObject {
//   constructor() {}
// }

// var obj3 = new MyObject();

// console.log(obj2);
// console.log(obj3);

// obj.a = "1";
// console.log(obj);

// var key = "a";

// console.log(obj.key);
// console.log(obj[key]);

// Object.keys()
// Object.values()
// Object.entries() => [[a, "1"], [b, "2"]]
// {
//   a: "1",
//   b: '2'
// }

// var arr = [1, '1', true, function(){}]
// arr[arr.length-1]

// for();
// while;
// arr.forEach();
// arr.map()
// var num = 1;
// function foo(input) {
//   // passed by value
//   input = 2;
//   console.log(input); // 2
// }

// foo(num);
// console.log(num); // 1

// var person = { name: "nicole" };
// function foo(input) {
//   // passed by reference
//   input.name = "adam";
//   console.log(input); // adam
// }

// foo(person);
// console.log(person); // adam

// var a = 1;
// var b = a;
// var c = b;

// b = 5;
// console.log(a, b, c);

// var obj = {
//   a: 1,
// };

// var objB = obj;

// objB.a = 2;
// console.log(obj, objB);

// console.log(1 === 1);
// console.log({} === {}); // 000001, 000002
// console.log(obj === objB);

// // coercion
// console.log(1 == "1");
// console.log(1 == true);
// console.log(typeof (1 + "1"));
// console.log(12 * "10");
// console.log(12 - "10");

// // type conversion
// function add(str1, str2) {
//   var num1 = Number(str1);
//   var num2 = Number(str2);
//   return num1 + num2;
// }

// console.log(add("12", "13"));

//            var       |     let      |     const
// scope:    function       block           block
// hoisting: yes            no              no
// redeclare:yes            no              no
// reassign: yes            yes             no

// function foo() {
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//   }
//   console.log(a);
// }

// foo();

// function foo2() {
//   // console.log(a);
//   if (true) {
//     let a = 1;
//   }
//   console.log(a);
// }

// foo2();

// var a = 1;

// // after 100 lines
// var a = 100;
// a = 12;

// let b = 1;
// b = 2;
// // let b = 3;

// // const c = 1;
// // c = 2;
// // const c = 2;

// const obj = {};
// // obj = {};
// obj.a = 1;

// foo();

// function foo() {
//   console.log("123123");
//   console.log(this);
// }

// const foo2 = () => {
//   console.log("123");
//   console.log(this);
// };
// foo2();

// // closure
// function add() {
//   // >>>
//   var count = 0;
//   // <<<< closure
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const returned = add();
// returned();
// var count = 100;
// console.log(count);

// const foo3 = function () {};

// const arr = [1, 2];
// function foo1(arg) {
//   arg.push(3);
// }
// foo1(arr);
// console.log(arr);

// function foo2(arg) {
//   arg = [1, 2, 3, 4];
// }
// foo2(arr);
// console.log(arr);

// function foo3(arg) {
//   let b = arg;
//   b.push(3);
// }
// foo3(arr);
// console.log(arr);

// function foo4(arg) {
//   let b = arg;
//   b = [1, 2, 3, 4];
// }
// foo4(arr);
// console.log(arr);

// ======================================= JS 2 ===================================

// ES6
// rest operator, spread operator, destructuring, arrow function, for ... of, string template, class, promise

// rest operator - collect arguments and put them into one array
// function foo(val1, val2, ...args) {
//   console.log(val1, val2);
//   console.log(args);
//   console.log(arguments); // array-like object
// }

// foo(1, 2, 3, 4, 5, 6, 7, 8);

// spread operator ...
// shallow copy - create a copy that the properties will point to the same reference as the original one
// deep copy, JSON.stringify()
// const a = 1;
// const b = a;

// const person = {
//   name: "nicole",
//   age: "18",
//   //address: 000001
//   address: {
//     apt: "123",
//     street: "street",
//     city: "xxx",
//   },
//   // date: new Date(),
// };

// const person2 = {
//   name: person.name,
//   age: person.age,
//   address: person.address,
// };

// person3.address: 000001
// const person3 = { ...person, a: 1, name: "adam" };
// person.address.apt = "345";
// console.log(person3);
// console.log(person === person2);

// const arr = [1, 2, 3];
// const arr2 = [...arr];
// console.log(arr === arr2);

// console.log(person);

// const person4 = JSON.parse(JSON.stringify(person));
// console.log(person4);
// console.log(person === person4);

// const a1 = [1, 2, 3, [4]];
// const a2 = [4, 5, 6];
// const a3 = [...a1, ...a2];
// console.log(a3);

// destructuring
// const person = {
//   name: "nicole",
//   age: "18",
//   address: {
//     apt: "123",
//     street: "street",
//     city: "xxx",
//   },
//   date: new Date(),
// };

// const name = person.name;
// const age = person.age;

// const { name, age: age1, ...rest } = person;
// const [num, func] = useState()
// console.log(rest);

// arrow function vs function
// 1. syntax
// 2. 'this' - arrow function's this context is refering to the outer context
// 3. arguments

// const foo = (x, y) => 1;

// this - refering to the object that is calling the function
// const obj = {
//   name: "nicole",
//   foo() {
//     console.log(this);
//     const foo2 = () => {
//       console.log(this);
//     };
//     foo2();
//   },
// };

// obj.foo();

// const obj2 = {
//   name: "nicole",
//   foo: () => {
//     console.log(this);
//   },
// };

// obj2.foo();

// const foo = () => {
//   console.log(arguments);
// };

// foo();

// const arr = [1, 2, 3];
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (const element of arr) {
//   console.log(element);
// }

// for (const element of obj) {
//   console.log(element);
// }

// for ... in
// for (const element in obj) {
//   console.log(element, obj[element]);
// }

// arr.a = "string";

// for (const element in arr) {
//   console.log(element);
// }
// console.log(arr);
// for (const element of arr) {
//   console.log(element);
// }

// const obj = {
//   name: "sam",
//   foo() {
//     console.log(`this is ${this.name}`);
//   },
// };
// obj.name = "adam";
// obj.foo();

// IIFE - immediately ivoked function expression

// const counter = (() => {
//   let count = 0;
//   return {
//     add() {
//       count++;
//     },
//     minus() {
//       count--;
//     },
//     getCount() {
//       console.log(count);
//     },
//   };
// })();

// console.log(counter);

// counter.add();
// counter.getCount();

// const a = counter();
// a.add();
// a.getCount();

// const b = counter()

// ======================================= JS 3 ===================================
// const p = {
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const person1 = {
//   name: "nicole",
//   __proto__: p,
// };

// const person2 = {
//   name: "adam",
//   __proto__: p,
// };

// const person3 = {
//   name: "bob",
//   __proto__: p,
// };

// console.log(person2.sayHi());

// person1.__proto__.age = 18;
// person1.age = 10;
// console.log(person1);
// console.log(p);
// console.log(person2);

// const obj = {
//   a: 1,
//   b: 1,
//   __proto__: {
//     b: 2,
//   },
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj);

// constructor function
// function Person(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("say hi");
//   };
// }

// // factory function
// function Person2(name) {
//   const obj = {};
//   obj.name = name;
//   obj.__proto__.walk = function () {
//     console.log("walking...");
//   };
//   return obj;
// }

// const p2 = Person2("adam");
// console.log(p2);

// Person.prototype.walk = function () {
//   console.log("walking...");
// };

// const p1 = new Person("nicole");
// console.log(p1);
// p1.sayHi();
// p1.walk();

// p1.__proto__.run = function () {
//   console.log("running...");
// };

// p1.run();

// class keyword is just a syntax sugar
// OOP - inheritance, encapsulation, abstraction, polymorphism
// inheritance - super, extend
// encapsulation - hide information from public, make some variables private
// abstraction - no instance, not supported in Javascript
// polymorphism - no overloading, but we have overriding

// instance method, class method, static method
// class Person {
//   #age;
//   static count = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//     Person.count = Person.count + 1;
//   }

//   static getCount() {
//     console.log(this);
//     return this.count;
//   }

//   walk() {
//     console.log(`${this.name} is walking...`);
//   }

//   set age(newAge) {
//     console.log("setter");
//     this.#age = newAge;
//   }

//   get age() {
//     return `the age is ${this.#age} `;
//   }
// }

// const p1 = new Person("nicole", 18);
// p1.walk();
// console.log(p1.age);
// p1.age = 10;

// p1.run = function () {
//   console.log(`${this.name} is running`);
// };

// p1.run();

// const p2 = new Person("adam", 18);
// // p2.run();

// console.log(Person.getCount());

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.__proto__.MyForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// arr.MyForEach((value, index, array) => {
//   console.log(value, index, array);
// });

// reduce, filter, map, find, slice, splice

// Array.prototype.mySplice = function (start, deleteCount, ...items) {
//   let tempArr;
//   let deletedElements = [];
//   if (deleteCount !== undefined) {
//     deletedElements = this.slice(start, start + deleteCount);
//     tempArr = [...this.slice(0, start), ...this.slice(start + deleteCount)];
//   }

//   if (items.length !== 0) {
//     tempArr = [
//       ...this.slice(0, start),
//       ...items,
//       ...this.slice(start + deleteCount),
//     ];
//   }

//   this.length = tempArr.length;
//   tempArr.forEach((element, index) => {
//     this[index] = element;
//   });

//   return deletedElements;
// };

// arr.mySplice(1, 2, 0, 1, 2, 3);
// console.log(arr);

// const foo = async () => 1;
// // const foo1 = async () => Promise.resolve(1)

// const p = new Promise((res) => {
//   setTimeout(() => {
//     res(2);
//   }, 200);
// });

// const main = async () => {
//   const a = await foo();
//   const b = await p;
//   console.log(a + b);
// };

// main();

// new Promise((res)=>{

//   res(a+b)
// })

// foo().then((data) => {
//   p.then((data2) => {
//     console.log(data + data2);
//   });
// });

// Promise.all([foo(), p]).then((res) => {
//   // console.log(res);
//   console.log(res[0] + res[1]);
// });

// pagination
// dividing data into smaller pieces to display
// client side pagination (get all the data with one request), server side pagination (send a request for each page)
