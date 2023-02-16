var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);


function calcular() {
    let n1 = Number(document.querySelector("#n1").value);
    var resultado = n1;
    for (var i = 1; i < n1; i++) {
        resultado *= i;

        
    }
    document.querySelector("#result").innerHTML = resultado;
}