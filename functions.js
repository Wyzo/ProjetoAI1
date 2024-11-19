function iniciarSliderAutomatico() {
    const div_centro = document.getElementById("centro");
    const botoes = document.querySelectorAll(".slider_botoes .slider_botao");

    const imagens = Array.from(botoes).map(button => button.getAttribute("data-image"));

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
