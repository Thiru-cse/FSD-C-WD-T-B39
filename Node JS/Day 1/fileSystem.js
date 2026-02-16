const fs = require("fs");

// Write File
fs.writeFile("hello.txt", "Day 1 NodeJS", (er) => {
  if (er) throw er;
  console.log("File Created!");
});

// Read File
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File Content", data);
});
