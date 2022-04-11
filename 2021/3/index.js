// ! https://adventofcode.com/2021/day/3

const fs = require("fs");
const diagnosticReport = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split(/\r?\n/);

// Helper functions
const getMostCommonValue = (array) =>
  array.sort(
    (a, b) =>
      array.filter((v) => v === a).length - array.filter((v) => v === b).length
  )[0];

// Part 1
const gammaRates = [];

for (let i = 0; i < diagnosticReport[0].length; i++) {
  const gamma = [];
  diagnosticReport.forEach((line) => gamma.push(line.charAt(i)));
  gammaRates.push(getMostCommonValue(gamma));
}

const gamma = parseInt(gammaRates.join(""));
const epsilon = parseInt(gammaRates.map((x) => (x == 1 ? 0 : 1)).join(""));
const power = gamma * epsilon;

console.log(`Part 1: ${power}`);

// Part 2
