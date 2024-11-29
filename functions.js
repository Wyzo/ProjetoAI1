function iniciarSliderAutomatico() {
    const div_centro = document.getElementById("centro_index");

    const imagens = 
    [   "Assets/Imagens/viseu1.jpg", 
        "Assets/Imagens/viseu_teste2.jpg",
        "Assets/Imagens/viseu_teste4.jpg"];

    let indiceAtual = 0;

    function trocarImagem() {
        const novaImagem = imagens[indiceAtual];
        div_centro.style.backgroundImage = `url(${novaImagem})`;
        indiceAtual = (indiceAtual + 1) % imagens.length; 
    }

    trocarImagem(); 
    setInterval(trocarImagem, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarSliderAutomatico();
});

function animarTitulo() {
    const letras = document.querySelectorAll(".titulo_animado span");

    let delay = 0;

    letras.forEach((letra, index) => {
        setTimeout(() => {
            letra.classList.add("titulo_animado_ativo");
            setTimeout(() => {
                letra.classList.remove("titulo_animado_ativo");
            }, 300);
        }, delay);

        delay += 300;
    });

    setTimeout(animarTitulo, delay + 10);
}

document.addEventListener("DOMContentLoaded", () => {
    animarTitulo();
});

/* ARRANJAR
function animarTitulo() {
    const letras = document.querySelectorAll(".titulo_animado span");
    let delay = 0;

    letras.forEach((letra, index => {
        setTimeout(() => {
            letra.classList.add("ativo");
            setTimeout(() => {
                letra.classList.remove("ativo");
            }, 500);
        }, delay);

        delay += 200;
    }));

    setTimeout(animarTitulo, delay + 500);
}

window.onload = animarTitulo;*/

function mostrarHoras(){
    const horasAtuais = new Date();
    const paragrafoHoras = document.getElementById("horas");

    const horas = horasAtuais.getHours();
    const minutos = horasAtuais.getMinutes();
    const segundos = horasAtuais.getSeconds();

    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    paragrafoHoras.textContent = `Horas: ${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

setInterval(mostrarHoras, 1000);
mostrarHoras();

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});