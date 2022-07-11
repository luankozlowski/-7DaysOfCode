let numero1 = 0;
let numero2 = 0;
fazerConta = "somar";

function somar(x, y) {
    return Number (x) + Number (y);
}

function subtracao(x, y) {
    return Number (x) - Number (y);
}

function multiplicacao(x, y) {
    return Number (x) * Number (y);
}

function divisao(x, y) {
    return Number (x) / Number (y);
}

while (fazerConta != "sair") {
    fazerConta = prompt("Qual tipo de operação você deseja realizar? Responda usando as seguintes opções: 'soma', 'subtração', 'multiplicação', 'divisão' ou digite 'sair' para fechar a calculadora.")
    while (fazerConta != "soma" && fazerConta != "subtração" && fazerConta != "multiplicação" && fazerConta != "divisão" && fazerConta != "sair") {
        alert("Opção inválida!");
        fazerConta = prompt("Qual tipo de operação você deseja realizar? Responda usando as seguintes opções: 'soma', 'subtração', 'multiplicação', 'divisão' ou digite 'sair' para fechar a calculadora.")
    }
    if (fazerConta === "sair") {
        break;
    }
    if (fazerConta === "soma") {
        numero1 = prompt("Digite o primeiro valor:");
        numero2 = prompt("Digite o segundo valor:");
        alert(somar(numero1, numero2));

    }
    if (fazerConta === "subtração") {
        numero1 = prompt("Digite o primeiro valor:");
        numero2 = prompt("Digite o segundo valor:");
        alert(subtracao(numero1, numero2));
    }
    if (fazerConta === "multiplicação") {
        numero1 = prompt("Digite o primeiro valor:");
        numero2 = prompt("Digite o segundo valor:");
        alert(multiplicacao(numero1, numero2));
    }
    if (fazerConta === "divisão") {
        numero1 = prompt("Digite o primeiro valor:");
        numero2 = prompt("Digite o segundo valor:");
        alert(divisao(numero1, numero2));
    }
}

alert("Até a próxima!");


