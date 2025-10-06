const listaEtiquetas = Array.from(document.querySelectorAll(".navegacao-lista__item"));
const listaSessoes = document.querySelectorAll(".sessao");

function desativaTodasEtiquetas() {
    listaEtiquetas.forEach((etiqueta) => {
        etiqueta.classList.remove("ativo");
    })
}

function ativaEtiquetas(quantidade) {
    desativaTodasEtiquetas();
    const listaParaAtivar = listaEtiquetas.slice(0, quantidade);
    listaParaAtivar.forEach((etiqueta) => {
        etiqueta.classList.add("ativo")
    })
}

function identificaSessoesAtivas() {
    let quantidadeSessoesAtivas = 0;
    listaSessoes.forEach((sessao) => {
        if (sessao.getBoundingClientRect().top < 50) quantidadeSessoesAtivas++
    })
    ativaEtiquetas(quantidadeSessoesAtivas);
}

window.addEventListener("scroll", identificaSessoesAtivas)