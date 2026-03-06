let c = parseInt(Math.random() * 101);
let f = (c * 9 / 5) + 32;

document.getElementById("celsius").textContent = 
"Temperatura em Celsius: " + c + "°C";

document.getElementById("fahrenheit").textContent = 
"Temperatura em Fahrenheit: " + f.toFixed(2) + "°F";