const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const boxes = input.split("\r\n");

// Part 1 - Calculate the total amount of paper needed

const calcWrappingPaper = (boxes) => {
  const neededPaperArr = boxes.map((box) => getReqPaper(box));
  const finalNeed = neededPaperArr.reduce((a, b) => a + b);
  console.log(`PART 1: The elves need ${finalNeed} sqft of wrapping paper`);
};

const getReqPaper = (box) => {
  const b = box.split("x");
  const surfaceArea = 2 * b[0] * b[1] + 2 * b[1] * b[2] + 2 * b[2] * b[0];
  const smallestSide = Math.min(b[0] * b[1], b[1] * b[2], b[2] * b[0]);
  return surfaceArea + smallestSide;
};

calcWrappingPaper(boxes);

// Part 2 - Calculate the total amount of ribbon needed

const calcRibbon = (boxes) => {
  const neededRibbonArr = boxes.map((box) => getReqRibbon(box));
  const finalNeed = neededRibbonArr.reduce((a, b) => a + b);
  console.log(`PART 2: The elves need ${finalNeed} feet of ribbon`);
};

const getReqRibbon = (box) => {
  const b = box.split("x");
  const sorted = b.sort((a, b) => a - b);
  const bow = sorted[0] * 2 + sorted[1] * 2;
  const ribbon = sorted[0] * sorted[1] * sorted[2];
  return bow + ribbon;
};

calcRibbon(boxes);
