function sum(a, b, c) {
  let soma = a + b + c;
  console.log(soma);
}

let a = 5;
let b = 10;
let c = 15;

sum(a, b, c);

let coche = {
  portas: 2,
};

function portas() {
  coche.portas++;
}

portas();
console.log(coche.portas);

let doors = document.querySelector("#doors");
doors.innerHTML = coche.portas;
