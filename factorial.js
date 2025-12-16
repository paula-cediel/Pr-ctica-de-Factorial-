let numero = prompt("Ingrese un número para calcular el factorial");
numero = Number(numero);

if (isNaN(numero) || numero < 0) {
    document.getElementById("resultado").textContent =
        "Error: Ingrese un número válido";
} else {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").textContent =
        `El factorial de ${numero} es ${factorial}`;
}
