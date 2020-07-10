import axios from "axios";
let hello: string = "hello";
console.log(hello);

function kakeru(a: number, b: number): number {
  return a * b;
}

console.log(kakeru(1, 2));

let isBeginner: boolean = true;
let n: null = null;
let u: undefined = undefined;

let list: number[] = [1, 2, 3];

//not recommend
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let c: Color = Color.Green;

let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

let myVariable: unknown = 10;

let a;
a = 10;
a = true;

let b = 20;
// not boolean because b's type is number
// b = true;

// multiType's type is number or boolean
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;

// ?: not need argument
function add(num1: number, num2?: number) {
  return num1 + num2;
}

add(5, 10);
add(4);
// error codes
// add(5, "10");
// add()

interface Person {
  firstName: string;
  lastName: string;
}

// function fullName(person: { firstName: string; lastName: string }) {
//   console.log(`My name is ${person.firstName} ${person.lastName}.`);
// }
function fullName(person: Person) {
  console.log(`My name is ${person.firstName} ${person.lastName}.`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

class Friend {
  friendName: string;

  constructor(name: string) {
    this.friendName = name;
  }

  greet() {
    console.log(`Hi! ${this.friendName}!`);
  }
}

let fri1 = new Friend("Mary");
console.log(fri1.friendName);
fri1.greet();
