let pergunta1 = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda SIM ou NÃO;");
let listaDeFrutas = [];
let listaDeLatícinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];

while (pergunta1 == "SIM"){
    let perguntaComida = prompt("Qual comida você deseja inserir?")
    let pergunta2 = prompt("Qual categoria essa comida se encaixa? Ex: frutas, latícinios, congelados ou doces");
         if (pergunta2 == "frutas"){
            listaDeFrutas.push(perguntaComida);
     }
         else if (pergunta2 == "latícinios"){
            listaDeLatícinios.push(perguntaComida);
      }
          else if (pergunta2 == "congelados"){
             listaDeCongelados.push(perguntaComida);
        }    
            else if (pergunta2 == "doces"){
                listaDeDoces.push(perguntaComida);
        }
        else alert("Você não digitou nenhuma opção válida!");

    pergunta1 = prompt("Deseja inserir outra comida? Responda SIM ou NÃO;")

}

alert(`Lista de compras:\n  Frutas: ${listaDeFrutas}\n  Laticínios: ${listaDeLatícinios}\n  Doces: ${listaDeDoces}\n  Congelados: ${listaDeCongelados}`);
