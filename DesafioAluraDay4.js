let máximo = 10;
let mínimo = 0;
let tentativas = 0;
let valor = Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo);

alert("Bem-vindo ao jogo da adivinhação da loucura! Você terá apenas TRÊS chances para acertar o número que eu estou pensando entre 0 a 10. Que comecem os jogos!");


while (tentativas < 3 ) {
    let chute1 = prompt("Qual valor você deseja chutar? Entre 0 a 10;");
    if (chute1 == valor) {
        alert(`Acerto Mizerávi! O número que eu escolhi foi o ${valor}`);
        tentativas = 4;
    }
    else
        alert("Que pena, você errou!")
        tentativas ++;
}

if (tentativas == 3){
    alert(`O número que eu escolhi foi o ${valor}, tente outra vez!`)
}
