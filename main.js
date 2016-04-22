//******** Basics *********//

//// Variables ////

var orderID = 9001;
console.log(orderID);
// returns 9001

var unDefined;
console.log(unDefined);
// returns undefined

noVarKeyword = 9000;
console.log(noVarKeyword);
// returns 9000. JS created a global variable for us

"use strict";
order= 1000;
console.log(order);
// returns variable error because it"s strict mode

var typeOf = 1000;
console.log(typeof typeOf);
// returns number, a primitive data point

var t2 = 20.12;
console.log(typeof t2);
// returns number, a primitive data point

var t3 = "hello";
console.log(typeof t3);
// returns string

var t4 = true;
console.log(typeof t4);
// returns boolean

var t5;
console.log(typeof t5);
// returns undefined

var t6 = {
  order: 100,
  active: true
}
console.log(typeof t6);
// returns object

var t7 = ["one", "two"];
console.log(typeof t7);
// returns object, even though it"s an array, because its type is an object

var t8 = null;
console.log(typeof t8);
// returns object. We"re saying t8 is an object, but it"s set to nothing

function t9(){
};
console.log(typeof t9);

// ******************** //

//// Function Fundamentals ////

console.log("FUNCTIONS:");

function f1() {
  console.log("printing");
}
f1();
// Returns printing

function f2(id) {
  console.log("Order number " + id);
}
f2(4);
// Returns Order number 4

function f3(v1, v2, v3) {
  console.log(v3);
}
f3(2, 4);
// Returns undefined

function f4() {
  // nothing returned
}
var f4 = f4();
console.log(f4);
// returns undefined.
// If a function does not return a value, JS will assign undefined as value

// function expression (assigning function to variable):
var f5 = function () {
  console.log("Order activated");
}
console.log(typeof f5);
// returns function

var f6 = function () {
  console.log("Order activated");
}
f6();
