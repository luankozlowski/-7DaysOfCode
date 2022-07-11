let adicionarMais = "sim";
let listaDeFrutas = [];
let listaDeLatícinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];
let listaDeCompras = [];
let remover = "";


while (adicionarMais != "não") {
    if (listaDeFrutas.length === 0 && listaDeLatícinios.length === 0 && listaDeCongelados.length === 0 && listaDeDoces.length === 0) {
        adicionarMais = prompt("Deseja inserir uma comida na sua lista de compras? Responda 'sim' ou 'não';")
    }
    else {
        adicionarMais = prompt("Deseja inserir uma comida na sua lista de compras? Responda 'sim' ou 'não' ou 'remover';")
    }

    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {
        alert("Opção inválida!")
        adicionarMais = prompt("Deseja inserir uma comida na sua lista de compras? Responda 'sim' ou 'não';")
    }

    if (adicionarMais === "não") {
        break;
    }

    if (adicionarMais === "sim") {
        let perguntaComida = prompt("Qual comida você deseja inserir?")
        let pergunta2 = prompt("Qual categoria essa comida se encaixa? Ex: frutas, latícinios, congelados ou doces");
        if (pergunta2 == "frutas") {
            listaDeFrutas.push(perguntaComida);
        }
        else if (pergunta2 == "latícinios") {
            listaDeLatícinios.push(perguntaComida);
        }
        else if (pergunta2 == "congelados") {
            listaDeCongelados.push(perguntaComida);
        }
        else if (pergunta2 == "doces") {
            listaDeDoces.push(perguntaComida);
        }
        else {
            alert("Você não digitou nenhuma opção válida!");
        }

    }

    else if (adicionarMais === "remover") {
        if (listaDeFrutas.length === 0 && listaDeLatícinios.length === 0 && listaDeCongelados.length === 0 && listaDeDoces.length === 0) {
            alert("A lista está vazia!");
        }
        else {
            remover = prompt(`Lista de compras:\n  Frutas: ${listaDeFrutas}\n  Laticínios: ${listaDeLatícinios}\n  Doces: ${listaDeDoces}\n  Congelados: ${listaDeCongelados}\n Qual produto você deseja remover?`);
            if (listaDeFrutas.indexOf(remover) != 1) {
                listaDeFrutas.splice(listaDeFrutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (listaDeLatícinios.indexOf(remover) != 1) {
                listaDeLatícinios.splice(listaDeLatícinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (listaDeDoces.indexOf(remover) != 1) {
                listaDeDoces.splice(listaDeDoces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (listaDeCongelados.indexOf(remover) != 1) {
                listaDeCongelados.splice(listaDeCongelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert("Não foi possível encontrar o item em nenhuma lista!")
            }

        }

    }
}

alert(`Lista de compras:\n  Frutas: ${listaDeFrutas}\n  Laticínios: ${listaDeLatícinios}\n  Doces: ${listaDeDoces}\n  Congelados: ${listaDeCongelados}`);

