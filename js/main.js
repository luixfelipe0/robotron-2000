const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const peças = {
    "braço": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleo":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento)=> {
    elemento.addEventListener("click", (evento)=> {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peça);
    });
})

function manipulaDados(operaçao, controle) {
    const peça = controle.querySelector("[data-contador]");

    if(operaçao === "+") {
        peça.value = parseInt(peça.value) + 1;

    } else {
        peça.value = parseInt(peça.value) - 1;
    }
}

function atualizaEstatisticas(operaçao, peça) {
    estatisticas.forEach( (elemento)=> {
        if(operaçao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + peças[peça][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) - peças[peça][elemento.dataset.estatistica];
        }
    });
}
