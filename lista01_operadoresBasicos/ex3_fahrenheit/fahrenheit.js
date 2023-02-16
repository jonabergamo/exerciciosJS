var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    let tc = Number(document.querySelector("#n1").value);
  resultado = (tc * 9/5) + 32;
  document.querySelector("#result").innerHTML = resultado + "°F";
}
