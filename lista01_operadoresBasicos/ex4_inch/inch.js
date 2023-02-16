var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);


function calcular() {
let n1 = Number(document.querySelector("#n1").value);
  resultado = n1 / 25.4;
  document.querySelector("#result").innerHTML = parseFloat(resultado).toFixed(2) + '″';
}
