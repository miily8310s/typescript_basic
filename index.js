"use strict";
exports.__esModule = true;
var hello = "hello";
console.log(hello);
function kakeru(a, b) {
    return a * b;
}
console.log(kakeru(1, 2));
var isBeginner = true;
var n = null;
var u = undefined;
var list = [1, 2, 3];
//not recommend
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green;
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
var myVariable = 10;
var a;
a = 10;
a = true;
var b = 20;
// not boolean because b's type is number
// b = true;
// multiType's type is number or boolean
var multiType;
multiType = 20;
multiType = true;
var anyType;
// ?: not need argument
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add(4);
// function fullName(person: { firstName: string; lastName: string }) {
//   console.log(`My name is ${person.firstName} ${person.lastName}.`);
// }
function fullName(person) {
    console.log("My name is " + person.firstName + " " + person.lastName + ".");
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Friend = /** @class */ (function () {
    function Friend(name) {
        this.friendName = name;
    }
    Friend.prototype.greet = function () {
        console.log("Hi! " + this.friendName + "!");
    };
    return Friend;
}());
var fri1 = new Friend("Mary");
console.log(fri1.friendName);
fri1.greet();
