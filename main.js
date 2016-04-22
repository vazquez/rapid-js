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

console.log("**************FUNCTIONS:");

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

// ******************** //

//// If and Switch Statements ////

console.log("**********************IF/ELSE & SWITCH:");

// Conditional statement
var total = 99;
var freeShip = false;
if (total >= 50) {
  freeShip = true;
}
console.log(freeShip);
// returns true

var total = 99;
var freeShip = false;
if (total >= 100) {
  freeShip = true;
}
console.log(freeShip);
// returns false

var total = 99;
var shipping;
if (total >= 100) {
  shipping = true;
} else {
  shipping = false;
}
console.log(shipping);
// returns false

var orderType = "business";
var shipMethod;
if (orderType == "business") {
  shipMethod = "Fedex";
} else if (orderType == "personal") {
  shipMethod = "UPS";
} else {
  shipMethod = "USPS"
}
console.log(shipMethod);
// returns Fedex

var orderType = "vacation";
var shipMethod;
switch (orderType) {
  case "business":
    shipMethod = "Fedex";
    break;
  case "personal":
    shipMethod = "UPS";
    break;
  default:
    shipMethod = "USPS";
}
console.log(shipMethod);
// returns USPS

var total = 99;
var discount;
switch (true) {
  case total >=50 && total <75:
    discount = 10;
    break;
  case total >=75 && total <100:
    discount = 15;
    break;
  case total >=100:
    discount = 20;
    break;
  default:
    discount= 0;
}
console.log(discount);
// returns 15

// ******************** //

//// While and While do Statements ////

console.log("*******************WHILE AND WHILE DO:");

var count = 3;
var item = 0;
while (item < count) {
  console.log("item: " + item);
  item++;
  // or console.log("item: " + item++);
}
// returns item: 0 1 2

var count = 3;
var item = 0;
do {
  console.log("item: " + item++);
} while (item < count);
// returns item: 0 1 2

var count = 3;
var item = undefined;
do {
  console.log("item: " + item++);
} while (item < count);
// returns item: NaN

// ******************** //

//// For and For In ////

console.log("************************FOR and FOR IN:");

var count = 3;
for (var i = 0; i < count; i++) {
  console.log(i);
}
// returns 0 1 2

var count = 3;
var i = 0;
for (; i < count; i++) {
  console.log(i);
}
// returns 0 1 2

var item = {
  product: "widget",
  quantity: 4,
  price: 9
}
for (var field in item) {
  console.log(field);
}
// returns product quantity price

var productObject = {
  product: "widget",
  quantity: 4,
  price: 9
}
for (var key in productObject) {
  console.log(key + ": " + productObject[key]);
}
// returns product: widget quantity: 4 price: 9

// ******************** //

//******** Variables, Types, and Scope *********//

console.log("*********************Variables, Types, and Scope:");

//// Hoisting ////
// Having access to variables before they are even declared
// It's as if the declarations are lifted (hoisted) to the top of the
// function before execution.
// Hoisting can be confusing and can be the source of many bugs

console.log(id);
var id = 9000;
// returns undefined because the compiler knows about the global variable, but
// still doesn't know it's value

var total = price * quantity;
var price = 3;
var quantity = 5;
console.log(total);
// returns NaN because we are evaluating two values before they are created

showProduct();
function showProduct() {
  console.log("Showing a Product");
}
// returns Showing a Product.
// Hoising works well with function declaration (naming a function)

// ******************** //

//// Numbers ////

console.log("*********************NUMBERS:");

var quantity = 2; //integer
var price = 0.99; //floating point number
console.log(quantity * price);
// returns 1.98

var price = "0.99";
console.log(typeof price);
// returns string

var value = 3.2e4;
console.log(value);
// returns 32000

var n = Number.MAX_VALUE * 2;
console.log(n);
// returns Infinity because it's too large

var n = Infinity;
console.log(typeof n);
// returns number

var count;
var price = 5;
console.log(price / count);
// returns NaN

console.log(typeof NaN);
// returns number

// ******************** //

//// Strings ////

console.log("********************STRINGS:");

console.log("The order is \"In Progress\"");
// returns The order is "In Progress"

var word = "Ricardo";
console.log(word.length);
// returns 7

var word = "   Ricardo   ";
console.log("[" + word.trim() + "]");
// returns [Ricardo]

var word = "Ricardo";
console.log(word.toLowerCase());
// returns ricardo

var word = "Ricardo";
console.log(word.toUpperCase());
// returns RICARDO

// ******************** //

//// Boolean ////

console.log("********************BOOLEAN:");

var isSpecial = true;
if (isSpecial) {
  console.log("it's true");
}
// returns it's true

// var isSpecial = True;
if (isSpecial) {
  console.log("it's true");
}
// returns ReferenceError because of capital T

// undefined and null result in false

var value = 99;
console.log(typeof !!value);
// Creates a boolean value out of any variable
// returns Boolean

var value = "value";
console.log(!!value);
// returns true

// ******************** //

//// Undefined and Null ////

console.log("********************UNDEFINED AND NULL:");

var xID;
console.log(typeof xID);
// returns undefined

var xID = null;
console.log(typeof xID);
// returns Object, null is an empty object

console.log(undefined == null);
// returns true
// returns JS treats undefined and null as equal

console.log(undefined === null);
// returns false
// one has a type of undefined and the other a type of object

// ******************** //
