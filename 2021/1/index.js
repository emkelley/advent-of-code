// ! https://adventofcode.com/2021/day/1

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\r\n")
  .filter((x) => x)
  .map(Number);

// * Part 1
let counter = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] > input[i - 1]) counter++;
}
console.log(counter);

// * Part 2
const count = input.reduce((acc, curr, i, src) => {
  const prevSum = src[i - 1] + src[i] + src[i + 1];
  const curSum = src[i] + src[i + 1] + src[i + 2];
  if (i === 0) return 0;
  if (curSum > prevSum) return acc + 1;
  return acc;
}, 0);
console.log(count);
