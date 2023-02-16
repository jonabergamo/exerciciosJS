var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);


function calcular() {
    let n1 = Number(document.querySelector("#n1").value);

    if (n1 % 2 === 0) {
        document.querySelector("#result").innerHTML = `[${n1}] é par`;
    } else {
        document.querySelector("#result").innerHTML = `[${n1}] é impar`;
    }


}