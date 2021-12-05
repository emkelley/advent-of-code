// ! https://adventofcode.com/2021/day/3

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\r\n");

const getCharsByPos = (index) => input.map((s) => s[index]);

let gammaRates = [];
let epsilonRates = [];
const queryStringLength = input[0].length;

for (let i = 0; i < queryStringLength; i++) {
  const chars = getCharsByPos(i);
  let counts = {};
  chars.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
  const mostCommon = counts["0"] > counts["1"] ? 0 : 1;
  gammaRates.push(mostCommon);
  epsilonRates.push(mostCommon === 1 ? 0 : 1);
}

const finalGamma = parseInt(gammaRates.join(""), 2);
const finalEpsilon = parseInt(epsilonRates.join(""), 2);
const powerConsumption = finalGamma * finalEpsilon;

console.log(powerConsumption);
