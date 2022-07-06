let nome = prompt("Qual o seu nome?");
let mensagemErro = "Você não digitou nenhuma opção válida!";

let pergunta1 = prompt(`Olá ${nome}, bem-vindo ao meu jogo! Qual área a frente você quer seguir: Front-End ou Back-End?`)

if (pergunta1 == "Front-End") {
    let resposta = prompt("Excelente! Você quer aprender React ou Vue?")
}
else if (pergunta1 == "Back-End"){
    let resposta = prompt("Ótima escolha! Você quer aprender C# ou Java?")
}
else alert(mensagemErro);

let pergunta2 = prompt("Que maravilha! Se você prefere seguir se especializando na área escolhida digite 1 ou se preferir se desenvolver para se tornar Fullstack digite 2.")

let pergunta4 = "ok";

while (pergunta4 == "ok"){
    pergunta3 = prompt("Quais sãos as tecnologias nas quais você gostaria de se especializar ou de conhecer? Responda uma de cada vez;")
    alert(`Essa tecnologia ${pergunta3} é maneira demais!`)
    pergunta4 = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda 'ok' se sim;")
}

alert("Obrigado por participar do meu jogo! Volte Sempre!")