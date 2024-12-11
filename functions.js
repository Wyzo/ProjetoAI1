function iniciarSliderAutomatico() {
    const div_centro = document.getElementById("centro_index");

    const imagens = 
    [   "Assets/Imagens/Banners/viseu1.jpg", 
        "Assets/Imagens/Banners/viseu_teste2.jpg",
        "Assets/Imagens/Banners/viseu_teste4.jpg"];

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