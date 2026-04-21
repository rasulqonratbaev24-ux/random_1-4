const express = require("express");
const app = express();

let numbers = [
  1,1,1,1,1,1,
  2,2,2,2,2,2,
  3,3,3,3,3,3,
  4,4,4,4,4,4
];

numbers.sort(() => Math.random() - 0.5);

// API
app.get("/get-number", (req, res) => {
  let num = numbers.pop();
  if (!num) return res.json({ num: "Tugadi", left: 0 });

  res.json({
    num: num,
    left: numbers.length
  });
});

// FRONTEND
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Random 1-4</title>
    </head>
    <body style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
      
      <h1 id="number" style="font-size:120px;">?</h1>
      <p id="left" style="font-size:20px;">Qolgan: 24</p>
      
      <button onclick="getNumber()" style="font-size:30px;padding:10px 20px;cursor:pointer;">
        Random olish
      </button>

      <script>
        async function getNumber() {
          let res = await fetch('/get-number');
          let data = await res.json();

          document.getElementById('number').innerText = data.num;
          document.getElementById('left').innerText = "Qolgan: " + data.left;
        }
      </script>

    </body>
    </html>
  `);
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
