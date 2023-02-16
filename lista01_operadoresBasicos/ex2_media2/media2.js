var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);
  n2 *= 2;
  console.log(n2);
  resultado = (n1 + n2) / 3;
  document.querySelector("#result").innerHTML = parseFloat(resultado).toFixed(2);
}
