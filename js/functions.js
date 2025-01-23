function iniciarSliderAutomatico() {
    const div_centro = document.getElementById("centro_index");

    const imagens = 
    [   "Assets/Imagens/Banners/fundo_viseu1.webp", 
        "Assets/Imagens/Banners/fundo_viseu2.webp",
        "Assets/Imagens/Banners/fundo_viseu3.webp",
        "Assets/Imagens/Banners/viseu2.jpeg",
        "Assets/Imagens/Banners/viseu1.jpg"];

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


//resize da página

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navTopoHeader = document.querySelector('.nav_topo_header');
    const conteudo2 = document.querySelector('.conteudo2');

    // Ajusta os estilos com base no tamanho da tela
    const applyResponsiveStyles = () => {
        if (window.innerWidth <= 768) {
            // Configurações para telas pequenas
            if (conteudo2) {
                conteudo2.style.flexDirection = 'column';
                conteudo2.style.alignItems = 'flex-end';
                conteudo2.style.width = '100%';
                conteudo2.style.textAlign = 'right';
            }

            if (navTopoHeader) {
                navTopoHeader.style.display = 'none'; // Esconde o menu inicialmente
            }

            if (menuToggle) {
                menuToggle.style.display = 'block'; // Mostra o botão de menu
            }
        } else {
            // Configurações para telas grandes
            if (conteudo2) {
                conteudo2.style.flexDirection = '';
                conteudo2.style.alignItems = '';
                conteudo2.style.width = '';
                conteudo2.style.textAlign = '';
            }

            if (navTopoHeader) {
                navTopoHeader.style.display = 'flex'; // Mostra o menu
                navTopoHeader.classList.remove('show'); // Garante que o menu não fique "preso" no modo mobile
            }

            if (menuToggle) {
                menuToggle.style.display = 'none'; // Esconde o botão de menu
            }
        }
    };

    // Alterna o menu ao clicar no botão
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navTopoHeader) {
                const isVisible = navTopoHeader.style.display === 'block';
                navTopoHeader.style.display = isVisible ? 'none' : 'block';
            }
        });
    }

    // Aplica estilos no carregamento inicial
    applyResponsiveStyles();

    // Reaplica estilos no redimensionamento da janela
    window.addEventListener('resize', applyResponsiveStyles);
});