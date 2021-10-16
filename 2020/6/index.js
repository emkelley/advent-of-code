// ! https://adventofcode.com/2020/day/6

const fs = require("fs");

const groups = fs
  .readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

let count = 0;

// * Part I

// function removeDuplicateCharacters(string) {
//   return string
//     .split("")
//     .filter(function (item, pos, self) {
//       return self.indexOf(item) == pos;
//     })
//     .join("");
// }

// groups.forEach((group) => {
//   let clean = group.replace(/\s+/g, ""); // remove newlines
//   let deDupeString = removeDuplicateCharacters(clean); //remove dupes
//   let numOfYeses = deDupeString.length;
//   count = count + numOfYeses;
// });

// * Part II

groups.forEach((group) => {
  group.split("");
  console.table(group);
});

console.log(count);
