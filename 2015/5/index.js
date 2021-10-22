const fs = require("fs");
const input = fs.readFileSync("./input.txt").split("\n");

const isContainPair = (string) => /([a-z][a-z]).*\1/.test(string);
const isContainRepeatLetter = (string) => /([a-z])[a-z]\1/.test(string);

const isNiceString = (string) =>
  !!(isContainPair(string) && isContainRepeatLetter(string));

const result = input.reduce(
  (total, string) => (isNiceString(string) ? ++total : total),
  0
);

console.log(result);
