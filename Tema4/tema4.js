let numeroIf = prompt("Type a number");
let condition;

if (numeroIf >= 0) {
  condition = "Positivo";
}
if (numeroIf < 0) {
  condition = "Negativo";
}

let number = document.querySelector("#number");
number.innerHTML = numeroIf;

let answer = document.querySelector("#answer");
answer.innerHTML = condition;

let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

let numeroDoWhile = 3;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log("for é " + numeroFor);
}

let estacion = prompt("Type a season");

switch (estacion) {
  case "Verano":
    console.log("Verano");
    break;
  case "Invierno":
    console.log("Invierno");
    break;
  case "Primavera":
    console.log("Primavera");
    break;
  case "otoño":
    console.log("Otoño");
    break;
  default:
    console.log("No es una estacion");
}
