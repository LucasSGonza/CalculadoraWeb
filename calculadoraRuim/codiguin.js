//função com retorno booleano para verificar se foram digitados números
function verificarNumero(text) {
    if (isNaN(text)) {
        alert("Digite somente números!");
        limparCampos();
        return console.log(false);
    } else {
        return console.log(true);
    }
}

//função para limpar os campos
function limparCampos() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado: ";
}


//Selecionar a operação desejada
function selecionarOperacao() {
    let operacao = document.getElementById("operacoes"); //seleciona a tag <select> pelo seu id

    switch (operacao.options[operacao.selectedIndex].text) { // --> operacao => tag select  ;; .options =>
        case "Adição":
            numero1 = parseFloat(document.getElementById("numero1").value);
            numero2 = parseFloat(document.getElementById("numero2").value);
            somar(numero1, numero2);
            break;

        case "Subtração":
            numero1 = parseFloat(document.getElementById("numero1").value);
            numero2 = parseFloat(document.getElementById("numero2").value);
            subtrair(numero1, numero2);
            break;

        case "Multiplicação":
            numero1 = parseFloat(document.getElementById("numero1").value);
            numero2 = parseFloat(document.getElementById("numero2").value);
            multiplicar(numero1, numero2);
            break;

        case "Divisão":
            numero1 = parseFloat(document.getElementById("numero1").value);
            numero2 = parseFloat(document.getElementById("numero2").value);
            dividir(numero1, numero2);
            break;

    }
}

/*
//função para continuar adicionando números
function continuar() {

    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    numero2 = numero2 + numero1;
    numero1 = 0;

    console.log(`numero1 ${numero1}\nnumero2: ${numero2}\nResultado parcial: ${numero2 += numero1}`)

    return (document.getElementById("resultado-parcial").innerHTML = "resultado parcial: " + (numero2 += numero1))
}
*/

//Operações
function somar(numero1, numero2) {
    return (document.getElementById("resultado").innerHTML = "Resultado: " + (numero1 + numero2));
}

function subtrair(numero1, numero2) {
    return (document.getElementById("resultado").innerHTML = "Resultado: " + (numero1 - numero2));
}

function multiplicar(numero1, numero2) {
    return (document.getElementById("resultado").innerHTML = "Resultado: " + (numero1 * numero2));
}

function dividir(numero1, numero2) {
    return (document.getElementById("resultado").innerHTML = "Resultado: " + (numero1 / numero2).toFixed(2));
}