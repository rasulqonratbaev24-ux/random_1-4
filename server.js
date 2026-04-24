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
            text-align: center;
            font-family: Arial;
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            color: white;
            margin-top: 100px;
          }
          h1 {
            font-size: 120px;
            margin: 20px;
          }
          button {
            padding: 15px 30px;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            background: #fff;
            color: #333;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1 id="num">?</h1>
        <p id="left">Qalǵan: ${numbers.length}</p>
        <button onclick="getNum()">Random alıw</button>

        <script>
          async function getNum() {
            const res = await fetch('/get-number');
            const text = await res.text();
            document.getElementById('num').innerText = text;
            
            if(text === "Tamamlandi"){
              document.getElementById('left').innerText = "Qalǵan: 0";
            } else {
              document.getElementById('left').innerText = "Qalǵan: " + (parseInt(document.getElementById('left').innerText.split(': ')[1]) - 1);
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
