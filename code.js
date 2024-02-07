 /*

const mensagem = "Primeira Aula!"
alert(mensagem + (9 * 2) + "hrs tem mais!" )

const celular = {
    cor: 'preto',
    modelo:'xiaomi',
    peso: 150
}

alert(celular.peso)
*/

// um array com o objeto das perguntas, contendo um array de respostas linkadas com suas respectivas perguntas
const perguntas = [
    {
        pergunta:"O que significaq a sigla RPG?",
        resposta: [
            "Roll Party Game",
            "Role Playing Game",
            "Reality Parallel Gaming",
    ],
    correta: 1  //definir a  posição da correta
    },
    {
        pergunta:"Como geralmente se define a habilidade dos personagens?",
        resposta: [
            "Com Atributos e Perícias",
            "Com talentos e Falhas",
            "Com Objetivos e Medos",
    ],
    correta: 0
    },
    {
        pergunta:"Qual não é um sistema de RPG de mesa?",
        resposta: [
            "Dungeons and Dragons",
            "Vampiro: a máscara",
            "God of War",
    ],
    correta: 2
    },
    {
        pergunta:"Qual o nome da classe mais furtiva de DeD?",
        resposta: [
            "Guerreiro",
            "Ladino",
            "Bardo",
    ],
    correta: 1
    },
    {
        pergunta:"O que signfica DT?",
        resposta: [
            "A meta necessária para um sucesso",
            "Número de sorte do personagem",
            "Pontos de vida do personagem",
    ],
    correta: 0
    },
    {
        pergunta:"Qual destes dados não costuma existir num conjunto físico?",
        resposta: [
            "D20",
            "D6",
            "D40",
    ],
    correta: 2
    },
    {
        pergunta:"O que significaq a sigla NPC?",
        resposta: [
            "Non player Character",
            "Nine plots Character",
            "None potions Caught ",
    ],
    correta: 0
    },
    {
        pergunta:"O que é uma condição?",
        resposta: [
            "É uma cena especial",
            "É um status temporário de um personagem",
            "É um tipo de missão de NPC",
    ],
    correta: 1
    },
    {
        pergunta:"Qual outro nome é dado para o narrador?",
        resposta: [
            "Pai",
            "Deus",
            "Mestre",
    ],
    correta: 2
    },
    {
        pergunta:"O que é iniciativa?",
        resposta: [
            "É o quão atraente seu personagem é",
            "É a definição da ordem dos peronagens de agir",
            "É qual personagem vai morrer primeiro",
    ],
    correta: 1
    },
]

const quiz =  document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set() // Set não repete informação
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// repetição de preenchimento do template
for(const item of perguntas) {


    // pega o template e clona, além de pegar o h3 que montamos
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for( let resposta of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {  
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)

            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
