const express = require("express");
const app = express();

let numbers = [
  1,1,1,1,1,1,
  2,2,2,2,2,2,
  3,3,3,3,3,3,
  4,4,4,4,4,4
];

numbers.sort(() => Math.random() - 0.5);

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Random 1-4</title>
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0a0a0f;
        font-family: Arial;
        color: white;
      }

      .card {
        text-align: center;
        padding: 40px;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 0 40px rgba(0,0,0,0.8);
      }

      h1 {
        font-size: 180px;
        margin: 20px 0;
        background: linear-gradient(45deg, #00f2fe, #ff00ff);
        -webkit-background-clip: text;
        color: transparent;
        text-shadow: 0 0 30px rgba(255,0,255,0.7);
      }

      .left {
        margin: 20px;
        font-size: 24px;
        opacity: 0.8;
      }

      button {
        padding: 20px 50px;
        font-size: 24px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        color: white;
        background: linear-gradient(45deg, #00f2fe, #ff00ff);
        box-shadow: 0 0 20px rgba(255,0,255,0.7);
      }

      button:hover {
        transform: scale(1.05);
      }

      .done {
        margin-top: 20px;
        color: #00ffcc;
        display: none;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1 id="num">?</h1>
      <div class="left" id="left">Qalǵan: ${numbers.length}</div>
      <button onclick="getNum()">Random alıw</button>
      <div class="done" id="done">Bári tamamlandı 🎉</div>
    </div>

    <script>
      async function getNum() {
        const res = await fetch('/get-number');
        const text = await res.text();
        document.getElementById('num').innerText = text;

        if(text === "Tamamlandi"){
          document.getElementById('left').innerText = "Qalǵan: 0";
          document.getElementById('done').style.display = "block";
        } else {
          let current = document.getElementById('left').innerText.split(': ')[1];
          document.getElementById('left').innerText = "Qalǵan: " + (current - 1);
        }
      }
    </script>
  </body>
  </html>
  `);
});

app.get("/get-number", (req, res) => {
  let num = numbers.pop();
  if (!num) return res.send("Tamamlandi");
  res.send(num.toString());
});

app.listen(3000, () => console.log("Server ishladi"));
