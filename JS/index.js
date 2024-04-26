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
