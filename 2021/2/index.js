// ! https://adventofcode.com/2021/day/2

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\r\n")
  .filter((x) => x);

// * Part 1
// let horizontal = 0;
// let depth = 0;
// input.forEach((instruction) => {
//   const [direction, units] = instruction.split(" ");
//   if (direction === "forward") horizontal += parseInt(units);
//   if (direction === "up") depth -= parseInt(units);
//   if (direction === "down") depth += parseInt(units);
// });
// console.log(horizontal);
// console.log(depth);
// console.log(horizontal * depth);

// * Part 2
let horizontal = 0;
let depth = 0;
let aim = 0;

input.forEach((instruction) => {
  const [direction, units] = instruction.split(" ");
  if (direction === "forward") {
    horizontal += parseInt(units);
    depth = depth + aim * units;
  }
  if (direction === "up") aim -= parseInt(units);
  if (direction === "down") aim += parseInt(units);
});

console.log(horizontal * depth);
