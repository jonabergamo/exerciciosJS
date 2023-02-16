var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  let n1 = Number(document.querySelector("#n1").value);

  let divisor = 2;
  while(n1%divisor != 0)
      divisor++;
  
  if(n1 == divisor)
  document.querySelector("#result").innerHTML = `${n1} é primo!`;
  else
  document.querySelector("#result").innerHTML = `${n1} não é primo!`;
}
