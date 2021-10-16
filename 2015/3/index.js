const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("");

const santaDupes = (inputArr, santaType = "all") => {
  let inputQueue;

  if (santaType === "all") {
    inputQueue = inputArr;
  } else if (santaType === "santa") {
    inputQueue = inputOdds = inputArr.filter((item, index) => index % 2 !== 0);
  } else inputQueue = inputArr.filter((item, index) => index % 2 === 0);

  let currentX = 0;
  let currentY = 0;
  let visitedHouses = ["0.0"];

  inputQueue.forEach((input) => {
    if (input === "^") currentY++;
    if (input === "v") currentY--;
    if (input === ">") currentX++;
    if (input === "<") currentX--;
    visitedHouses.push(`${currentX}.${currentY}`);
  });

  let unique = [...new Set(visitedHouses)];

  return unique;
};

const totalHouses = () => {
  const all = santaDupes(input, "all");
  const santa = santaDupes(input, "santa");
  const roboSanta = santaDupes(input, "robosanta");
  const unique = [...new Set([...santa, ...roboSanta])];
  console.log(`PART 1: Santa delivered presents to ${all.length} houses`);
  console.log(
    `PART 2: Santa and RoboSanta delivered presents to ${unique.length} houses`
  );
};
totalHouses();
