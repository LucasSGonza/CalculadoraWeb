const pontinho = ".";
let flagPontinho = false;
let conta = "";
let flagOperador = false;


function pegarNumero(numBotao) {
    document.getElementById("telinha").value = document.getElementById("telinha").value + numBotao;
    flagOperador = false;
}


function pegarOperador(tipoOperador) {
    if (document.getElementById("telinha").value === "") {
        console.log("operador falhou kk");
    } else if (flagOperador == true) {
        console.log("ja tem operador!");
    } else {
        document.getElementById("telinha").value += tipoOperador;
        flagOperador = true;
    }
}


function colocarPonto() {
    if (document.getElementById("telinha").value === "") {
        console.log("pontinho falhou kk");
        flagPontinho = false;
    } else if (flagPontinho == false) {
        document.getElementById("telinha").value += pontinho;
        flagPontinho = true;
    }
}


function limparTela() {
    document.getElementById("telinha").value = "";
    flagPontinho = false;
}


function limparDados() {
    document.getElementById("telinha").value = "";
    flagPontinho = false;
    flagOperador = false;
    conta = "";
}



//https://cdnjs.com/libraries/mathjs --> linkar no html pela tag <script>

function calcularExpressao(expressao) {
    resultado = math.evaluate(expressao);
    return resultado;
}


function mostrarResultado() { //pega tudo que ta na tela e faz a conta
    conta = document.getElementById("telinha").value;
    if (conta == "") {
        console.log("nada na tela");
    } else {
        const resultado = calcularExpressao(conta);
        document.getElementById("telinha").value = `Resultado: ${resultado}`;
        //ou
        //document.getElementById("telinha").value = `Resultado: ${eval(conta)}`;
    }
}




/*

https://mathjs.org/index.html
https://api.mathjs.org
https://www.w3schools.com/tags/ref_urlencode.asp

function fazerCalculo(expressao) {
    let expressaoQuaseNova = [...expressao]; //separa os elementos

    expressaoQuaseNova.map((index) => {

        //captura o primeiro caso que identificar (poderá ser: +, -, .)
        const verificarAdicao = expressaoQuaseNova.indexOf("+");
        const verificarSubtracao = expressaoQuaseNova.indexOf("-");
        const verificarPonto = expressaoQuaseNova.indexOf(".");

        if (verificarAdicao != -1) {
            index = verificarAdicao;
            expressaoQuaseNova.splice(index, 1, "%2B"); //remove o "+" achado no indíce (index recebe a posição do índice) e adiciona %2B no lugar
        } else if (verificarSubtracao != -1) {
            index = verificarSubtracao;
            expressaoQuaseNova.splice(index, 1, "%2D"); //remove o "-" e adiciona %2D
        } else if (verificarPonto != -1) {
            index = verificarPonto;
            expressaoQuaseNova.splice(index, 1, "%2E") //remove o "." e adiciona %2E
        }

    });

    let expressaoNova = expressaoQuaseNova.join("");

    console.log(`expressao antiga: ${expressao}\nexpressao quase nova: ${expressaoQuaseNova}\nexpressao nova: ${expressaoNova}`);

    var url = `https://api.mathjs.org/v4/?expr=(${expressaoNova})`;

    return fetch(url)
        .then(res => res.text()) //recebe a resposta no formato determinado
        .then(data => { //faz algo com a resposta
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error("Erro de requisição", error);
        });
}

function mostrarResultado() { //pega tudo que ta na tela e faz a conta
    conta = document.getElementById("telinha").value;
    if (conta == "") {
        console.log("nada na tela");
    } else {
        fazerCalculo(conta)
            .then((resultado) => document.getElementById("telinha").value = `Resultado: ${resultado}`);
    }
}

*/




