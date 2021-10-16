// ! https://adventofcode.com/2020/day/5

const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let finalSeats = [];
let mySeat;

for (line of input) {
  const letters = line.split("");

  let rowMax = 127;
  let rowMin = 0;
  let colMax = 7;
  let colMin = 0;
  let result = {};

  letters.forEach((letter) => {
    let middleRow = (rowMax + rowMin) / 2;
    let middleCol = (colMax + colMin) / 2;
    if (letter == "F") rowMax = middleRow;
    if (letter == "B") rowMin = middleRow;
    if (letter == "L") colMax = middleCol;
    if (letter == "R") colMin = middleCol;
  });

  result.finalRow = Math.ceil(Math.min(rowMin, rowMax));
  result.finalCol = Math.ceil(Math.min(colMin, colMax));
  result.finalSeat = result.finalRow * 8 + result.finalCol;
  finalSeats.push(result.finalSeat);
}

finalSeats.sort((a, b) => a - b); // sort array
mySeat = finalSeats.find((x, i) => finalSeats[i + 1] - x > 1) + 1;

console.log(`Highest Seat ID: ${Math.max(...finalSeats)}`);
console.log(`Empty Seat: ${mySeat}`);
