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

foo();

function foo() {
  console.log("123123");
  console.log(this);
}

const foo2 = () => {
  console.log("123");
  console.log(this);
};
foo2();

// closure
function add() {
  // >>>
  var count = 0;
  // <<<< closure
  return function () {
    count++;
    console.log(count);
  };
}

const returned = add();
returned();
var count = 100;
console.log(count);

const foo3 = function () {};
