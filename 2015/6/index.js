const v = require("voca");
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const matrix = createMatrix(1000);

function createMatrix(size) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = false;
    }
  }
  return matrix;
}

function toggleArea(matrix, x1, y1, x2, y2) {
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      matrix[i][j] = !matrix[i][j];
    }
  }
}
function setAreaFalse(matrix, x1, y1, x2, y2) {
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      matrix[i][j] = false;
    }
  }
}
function setAreaTrue(matrix, x1, y1, x2, y2) {
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      matrix[i][j] = true;
    }
  }
}
const start = () => {
  input.forEach((command) => {
    let cmd = command;
    v.replace(cmd, "through", "");
    if (cmd.startsWith("turn on")) v.replace(cmd, "turn on", "on");
    if (cmd.startsWith("turn off")) v.replace(cmd, "turn off", "off");
    console.log(cmd.startsWith("turn off"));
    const commandArray = cmd.split(" ");
    const action = commandArray[0];
    const x1 = commandArray[1].split(",")[0];
    const y1 = commandArray[1].split(",")[1];
    const x2 = commandArray[2].split(",")[0];
    const y2 = v.last(cmd, 3);
    console.log(x1, y1, x2, y2);
    if (action === "toggle") toggleArea(matrix, x1, y1, x2, y2);
    else if (action === "on") setAreaTrue(matrix, x1, y1, x2, y2);
    else if (action === "off") setAreaFalse(matrix, x1, y1, x2, y2);
  });

  function countLights(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) count++;
      }
    }
    return count;
  }

  console.log(countLights(matrix));
};

start();
