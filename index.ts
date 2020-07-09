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
