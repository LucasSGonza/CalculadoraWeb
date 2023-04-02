var pontinho = ".";
var flagPontinho = false;
var flagResultado = false;
var numero1 = 0, numero2 = 0, flag = "";


function pegarNumero(numBotao) {
    if (flagResultado == true) {
        console.log("Conta finalizada!");
    } else {
        document.getElementById("telinha").value = document.getElementById("telinha").value + numBotao;
    }
}

function colocarPonto() {
    if (document.getElementById("telinha").value == "") {
        console.log("pontinho falhou kk");
        flagPontinho = false;
    } else if (flagResultado == true) {
        console.log("Conta finalizada!");
    } else if (flagPontinho == false) {
        document.getElementById("telinha").value += pontinho;
        flagPontinho = true;
    }
}

function limparTela() {
    if (flagResultado == true) {
        console.log("Conta finalizada!");
    } else {
        document.getElementById("telinha").value = "";
        flagPontinho = false;
    }

}

function limparDados() {
    numero1 = 0;
    numero2 = 0;
    flag = "";
    flagPontinho = false;
    flagResultado = false;
    limparTela();
}

/*
numero1 sempre irá pegar o valor escolhido no HTML
numero2 servirá para armazenar o valor do numero1 inicial e então realizar alguma operação apos inserir mais um valor

EX: 

PRIMEIRA EXECUÇÃO
numero1 = 1;
numero2 = numero1;

SEGUNDA EXECUÇÃO
numero1 = 2; (lembrando que sempre será oq o usuario escolher (1,2,3,4,...) )
numero2 = numero2 (operação) numero1 --> EX soma: numero2 = numero2 + numero1 = 3


SOBRE AS FLAGS:

-> serve para indicar qual operação irá ser realizada
EX:

3 + 2 - 1   --> eu quero que o programa faça as operações em ordem. Para isso, eu preciso que a cada vez que
eu clicar em um novo operador, o programa realize a 1º operação solicitada para gerar um resultado parcial e
então continuar a fazer mais operações.

No caso acima, primeiro deve ser feita a SOMA, e gerar o resultado esperado da mesma, no caso 5 (3+2);
Após o cálculo, o usuário seleciona o operador "-" (subtração), portanto, está indicando que a próxima
operação irá subtrair um determinado valor do resultado parcial.

Para que isso tudo ocorra corretamente, utilizei de 'flags', que servem para indicar ao programa qual operação
deve ser feita primeiro, para então realizar a segunda. Mais detalhadamente, tento simular o jeito da calculadora,
ou seja, quando digito 3 + 2, ele gera o resultado 5, guarda esse valor e realiza uma segunda operação, pegando
esse valor e fazendo algo com ele junto do próximo numero inserido.


EX PRÁTICO DO CÓDIGO:

3 + 2 - 1 = 
(3 + 2) - 1 =
(5) - 1 = 4

PASSO A PASSO :

3 + --> numero1 = 3 // numero2 = numero1 // flag = +
2 - --> numero1 = 2 // numero2 = numero2 + numero1 = 5 // flag = -
1 = --> numero1 = 1 // numero2 = numero2 - numero1 = 4 // flag = -
Resultado: 4;


EX 2:

6 + 4 + 10 - 5 / 3 = 
(6 + 4) + 10 - 5 / 3 =
(10 + 10) - 5 / 3 =
(20 - 5) / 3 =
(15) / 3 = 5

PASSO A PASSO:

6 + --> numero1 = 6 // numero2 = numero1 // flag = +
4 + --> numero1 = 4 // numero2 = numero2 + numero1 = 10 // flag = +
10 - --> numero1 = 10 // numero2 = numero2 + numero1 = 20 // flag = -
5 / --> numero1 = 5 // numero2 = numero2 - numero1 = 15 // flag = /
3 = --> numero1 = 3 // numero2 = numero2 / numero1 = 5 // flag = /
Resultado: 5

*/

function realizarOperacao(flagOperacao) {

    switch (flagOperacao) {

        case "+":

            //Indica se o resultado está aparecendo na tela ou não (se estiver, bloqueia qualquer operação)
            if (flagResultado == true) {
                console.log("Conta finalizada!");
            } else {

                //flag começa sem valor, ou seja, devemos num 1º momento definir qual sera o valor inicial dela (será o da 1º operação)
                if ((flag == "") && (document.getElementById("telinha").value != "")) {
                    flag = "+";
                }

                //Verifica a última flag para resolver a próxima operação
                if (flag == "-") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 - numero1;
                    flag = "+";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "x") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 * numero1;
                    flag = "+";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "/") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 / numero1;
                    flag = "+";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "+") {

                    if (document.getElementById("telinha").value == "") {
                        console.log(`Não existe números na tela\nflag: ${flag}`);
                    } else if (numero1 == 0) {
                        numero1 = parseFloat(document.getElementById("telinha").value);
                        numero2 = numero1;
                        flag = "+";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    } else {
                        numero1 = parseFloat(document.getElementById("telinha").value);
                        numero2 += numero1; //ordem dos fatores não altera a soma
                        flag = "+";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    }

                }
            }
            break;


        case "-":
            if (flagResultado == true) {
                console.log("Conta finalizada!");
            } else {
                if ((flag == "") && (document.getElementById("telinha").value != "")) {
                    flag = "-";
                }

                if (flag == "+") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 + numero1;
                    flag = "-";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "x") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 * numero1;
                    flag = "-";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "/") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 / numero1;
                    flag = "-";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "-") {

                    if (document.getElementById("telinha").value == "") {
                        console.log(`Não existe números na tela\nflag: ${flag}`);
                    } else if (numero1 == 0) {
                        numero1 = parseFloat(document.getElementById("telinha").value); //numero1 é a variavel pra pegar o valor do HTML
                        numero2 = numero1;
                        flag = "-";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    } else {
                        numero1 = parseFloat(document.getElementById("telinha").value);
                        numero2 = (numero2 - numero1); //o numero2 se torna o primeiro valor inserido, por isso vai na frente
                        flag = "-";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    }

                }
            }

            break;


        case "x":
            if (flagResultado == true) {
                console.log("Conta finalizada!");
            } else {
                if ((flag == "") && (document.getElementById("telinha").value != "")) {
                    flag = "x";
                }

                if (flag == "+") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 + numero1;
                    flag = "x";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "-") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 - numero1;
                    flag = "x";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "/") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 / numero1;
                    flag = "x";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "x") {

                    if (document.getElementById("telinha").value == "") {
                        console.log(`Não existe números na tela\nflag: ${flag}`);
                    } else if (numero1 == 0) {
                        numero1 = parseFloat(document.getElementById("telinha").value); //numero1 é a variavel pra pegar o valor do HTML
                        numero2 = numero1;
                        flag = "x";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    } else {
                        numero1 = parseFloat(document.getElementById("telinha").value);
                        numero2 = (numero2 * numero1); //ordem dos fatores não altera o produto
                        flag = "x";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    }

                }
            }
            break;


        case "/":
            if (flagResultado == true) {
                console.log("Conta finalizada!");
            } else {
                if ((flag == "") && (document.getElementById("telinha").value != "")) {
                    flag = "/";
                }

                if (flag == "+") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 + numero1;
                    flag = "/";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "-") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 - numero1;
                    flag = "/";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "x") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = (numero2 * numero1);
                    flag = "/";
                    console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                    limparTela();
                } else if (flag == "/") {

                    if (document.getElementById("telinha").value == "") {
                        console.log(`Não existe números na tela\nflag: ${flag}`);
                    } else if (numero1 == 0) {
                        numero1 = parseFloat(document.getElementById("telinha").value); //numero1 é a variavel pra pegar o valor do HTML
                        numero2 = numero1;
                        flag = "/";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    } else {
                        numero1 = parseFloat(document.getElementById("telinha").value);
                        numero2 = (numero2 / numero1); //o numero2 se torna o primeiro valor inserido, por isso vai na frente
                        flag = "/";
                        console.log(`numero1: ${numero1}\nnumero2: ${numero2}\nflag: ${flag}`);
                        limparTela();
                    }

                }
            }
            break;


        case "=":
            if (document.getElementById("telinha").value == "") {
                console.log("Nenhum resultado a ser mostrado");
            } else if (flagResultado == true) {
                console.log("Conta finalizada!");
            } else {
                if (flag == "+") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 + numero1;
                } else if (flag == "-") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 - numero1;
                } else if (flag == "x") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 * numero1;
                } else if (flag == "/") {
                    numero1 = parseFloat(document.getElementById("telinha").value);
                    numero2 = numero2 / numero1;
                }

                document.getElementById("telinha").value = `Resultado: ${numero2}`;
                flagResultado = true;
            }
            break;
    }

}

