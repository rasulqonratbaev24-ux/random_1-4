const express = require("express");
const app = express();

let numbers = [
  1,1,1,1,1,1,
  2,2,2,2,2,2,
  3,3,3,3,3,3,
  4,4,4,4,4,4
];

numbers.sort(() => Math.random() - 0.5);

app.get("/get-number", (req, res) => {
  let num = numbers.pop();
  if (!num) return res.send("Tugadi");
  res.send(num.toString());
});

app.listen(3000, () => console.log("Server ishladi"));
