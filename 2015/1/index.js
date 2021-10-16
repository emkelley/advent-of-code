const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const elevator = (floorRequests) => {
  let floor = 0;
  let posEnteredBasement = [];
  const requestQueue = floorRequests.split("");
  requestQueue.forEach((request, index) => {
    // Part One: Make the elevator work
    if (request === "(") floor++;
    if (request === ")") floor--;
    // Part Two: Check the first time Santa goes to the basement
    if (floor === -1) posEnteredBasement.push(index + 1);
  });
  console.log(`PART 1: The elevator ended on floor ${floor}`);
  console.log(
    `PART 2: Santa first went downstairs in position ${Math.min(
      ...posEnteredBasement
    )}`
  );
};

elevator(input);
