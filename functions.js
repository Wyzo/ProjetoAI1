function mudarImagemSlider(){
    const div_centro = document.getElementById("centro");
    const botoes = document.querySelectorAll(".slider_botoes button");

    botoes.forEach(button => {
        button.addEventListener("click", () => {
            const imageUrl = button.getAttribute("data-image");
            div_centro.style.backgroundImage = imageUrl;
        });
    });
}   

function mudarImagemSliderAtracoes(){
    const div_centro = document.getElementById("cartoes_atracoes");
    const botoes = document.querySelectorAll(".slider_botoes button");

    botoes.forEach(button => {
        button.addEventListener("click", () => {
            const imageUrl = button.getAttribute("data-image");
            div_centro.style.backgroundImage = imageUrl;
        });
    });
}