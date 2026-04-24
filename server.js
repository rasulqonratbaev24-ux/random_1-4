<!DOCTYPE html>
<html lang="kaa">
<head>
<meta charset="UTF-8">
<title>Random 1-4</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

/* Kartochka */
.container {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Katta raqam */
#result {
  font-size: 100px;
  font-weight: bold;
  margin: 20px 0;
  transition: 0.3s;
}

/* Qolgan */
#count {
  margin-bottom: 20px;
  font-size: 18px;
  opacity: 0.8;
}

/* Tugma */
button {
  padding: 15px 40px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(45deg, #ff7a18, #ffb347);
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

/* Animatsiya */
.animate {
  transform: scale(1.3);
  color: #ffd700;
}
</style>

</head>
<body>

<div class="container">
  <h1 id="result">Baslaw</h1>
  <div id="count">Qalǵan: 24</div>
  <button onclick="getNumber()">Random alıw</button>
</div>

<script>
let count = 24;

async function getNumber() {
  const res = await fetch('/get-number');
  const text = await res.text();

  const result = document.getElementById('result');
  result.innerText = text;

  // animatsiya
  result.classList.add("animate");
  setTimeout(() => result.classList.remove("animate"), 300);

  if (text !== "Tamamlandi") {
    count--;
    document.getElementById('count').innerText = "Qalǵan: " + count;
  } else {
    document.getElementById('count').innerText = "Bári tamamlandı!";
  }
}
</script>

</body>
</html>
