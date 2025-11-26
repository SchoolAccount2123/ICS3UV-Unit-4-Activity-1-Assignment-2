// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-11-25

//--- Getting user Input

let numberOfRows = Number(prompt("How many rows would you like?"));

// Loop for triangle

for (let i = 1; i <= numberOfRows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line);
}