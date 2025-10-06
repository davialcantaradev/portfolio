const btnCopiarEmail = document.getElementById("btn-copiar-email");
const listaProjetos = [
    {
        nome: "O Poder do Talismã",
        descricao: "Inspirado nos talismãs mágicos do clássico desenho <span>Jackie Chan Adventures</span>, nesta aplicação você pode explorar cada um dos talismãs apresentados na série: basta clicar sobre o talismã desejado para visualizar seus detalhes. Uma forma nostálgica e divertida de relembrar esse universo tão querido!",
        imagem: "poder-dos-talismas",
        toGitHubRepositorio: "https://github.com/davialcantaradev/Talismas-Jackie-Chan",
        toGitHubPages: "https://davialcantaradev.github.io/Talismas-Jackie-Chan/"
    },
    {
        nome: "Campo Minado Clássico",
        descricao: "Lembra-se do icônico jogo do <span>Windows XP</span>? Esta recriação do <span>Campo Minado Clássico</span> traz de volta toda a emoção e o desafio de desvendar o tabuleiro sem acionar nenhuma mina! Um tributo nostálgico aos velhos tempos, com uma interface simples e fiel à experiência original.",
        imagem: "campo-minado",
        toGitHubRepositorio: "https://github.com/davialcantaradev/CampoMinado",
        toGitHubPages: "https://davialcantaradev.github.io/CampoMinado/"
    },
    {
        nome: "Quiz Vingadores",
        descricao: "Que tipo de herói você seria no universo da <span>Marvel</span>? Neste <span>Quiz Vingadores</span>, suas escolhas revelam qual personagem combina com o seu jeito de pensar e agir. Responda às perguntas, siga sua intuição e descubra o resultado final em uma experiência divertida e cheia de personalidade!",
        imagem: "quiz-vingadores",
        toGitHubRepositorio: "https://github.com/davialcantaradev/QuizVingadores",
        toGitHubPages: "https://davialcantaradev.github.io/QuizVingadores/"
    },
    {
        nome: "Desafio Pokémon",
        descricao: "Quem não se lembra do clássico desafio <span>“Quem é esse Pokémon?”</span> que animava os intervalos do desenho? O <span>Desafio Pokémon</span> traz de volta aquela sensação nostálgica de tentar adivinhar o Pokémon apenas pela silhueta. Escolha entre jogar com alternativas ou testar seus conhecimentos com respostas livres — e descubra se você ainda é um verdadeiro mestre Pokémon!",
        imagem: "desafio-pokemon",
        toGitHubRepositorio: "https://github.com/davialcantaradev/Desafio-Pokemon",
        toGitHubPages: "https://davialcantaradev.github.io/Desafio-Pokemon/"
    }
]

function insereProjetos() {
    const template = document.getElementById("template-projeto");
    const containerProjetos = document.querySelector(".lista-projetos");

    listaProjetos.forEach((projeto) => {
        const clone = template.content.cloneNode(true);

        const nome = clone.querySelector(".detalhes__nome");
        nome.textContent = projeto.nome;
        const descricao = clone.querySelector(".detalhes__descricao");
        descricao.innerHTML = projeto.descricao;

        const btnPages = clone.querySelector("#toGitHubPages");
        btnPages.href = projeto.toGitHubPages;
        const btnRepositorio = clone.querySelector("#toRepositorio");
        btnRepositorio.href = projeto.toGitHubRepositorio;

        const imagem = clone.querySelector(".projeto__imagem");
        imagem.style.setProperty("--bg", `url(../img/projects/${projeto.imagem}.jpg)`)
        imagem.style.setProperty("--bg-mobile", `url(../img/projects/${projeto.imagem}--mobile.jpg)`)
        imagem.setAttribute("for", `previa-${projeto.imagem}`);
        const inputPrevia = clone.querySelector(".projeto__input-previa");
        inputPrevia.id = `previa-${projeto.imagem}`;

        containerProjetos.appendChild(clone)
    })
}

async function copiarEmail() {
    const email = "davialcantara.dev@gmail.com";
    try {
        await navigator.clipboard.writeText(email);
        btnCopiarEmail.textContent = "Copiado"
        setTimeout(() => {
            btnCopiarEmail.textContent = "Copiar"
        }, 1000);
    } catch (error) {
        console.log(error);
    }
}

btnCopiarEmail.addEventListener("click", copiarEmail)
document.addEventListener("DOMContentLoaded", insereProjetos)

