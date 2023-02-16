var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
  let n1 = Number(document.querySelector("#n1").value);

  let divisor = 2;
  while(n1%divisor != 0)
      divisor++;
  
  if(n1 == divisor)
      console.log("Número Primo!");
  else
      console.log("Número NÃO primo!");
}
