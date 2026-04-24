const express = require("express");
const app = express();

let numbers = [
  1,1,1,1,1,1,
  2,2,2,2,2,2,
  3,3,3,3,3,3,
  4,4,4,4,4,4
];

// shuffle
numbers.sort(() => Math.random() - 0.5);

app.get("/", (req, res) => {
  res.redirect("/get-number");
});

app.get("/get-number", (req, res) => {
  let num = numbers.pop();

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  <style>
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #0f172a, #020617);
    font-family: Arial;
  }

  .box {
    text-align: center;
    padding: 90px;
    border-radius: 35px;
    background: rgba(255,255,255,0.05);
    box-shadow: 0 0 40px rgba(0,0,0,0.6);
  }

  .num {
    font-size: 180px;
    font-weight: bold;
    background: linear-gradient(45deg, #22d3ee, #e879f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .left {
    color: #ccc;
    margin: 20px 0;
  }

  button {
    padding: 22px 60px;
    font-size: 24px;
    border: none;
    border-radius: 15px;
    background: linear-gradient(45deg, #22d3ee, #e879f9);
    color: white;
  }
  </style>
  </head>

  <body>
    <div class="box">
      <div class="num">${num ? num : "Tamamlandı"}</div>
      <div class="left">Qalǵan: ${numbers.length}</div>
      <form action="/get-number">
        <button>Random alıw</button>
      </form>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Server ishlayapti"));
