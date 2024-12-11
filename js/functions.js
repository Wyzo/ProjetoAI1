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

//resize da página

document.addEventListener('DOMContentLoaded', () => {
    const applyResponsiveStyles = () => {
      const conteudo2 = document.querySelector('.conteudo2');
      const navTopoHeader = document.querySelector('.nav_topo_header');
      const menuToggle = document.querySelector('.menu-toggle');
  
      if (window.innerWidth <= 768) {
        if (conteudo2) {
          conteudo2.style.flexDirection = 'column';
          conteudo2.style.alignItems = 'flex-end';
          conteudo2.style.width = '100%';
          conteudo2.style.textAlign = 'right';
        }
  
        if (navTopoHeader) {
          navTopoHeader.style.display = 'none';
          navTopoHeader.style.flexDirection = 'column';
          navTopoHeader.style.width = '100%';
          navTopoHeader.style.backgroundColor = 'white';
          navTopoHeader.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
          navTopoHeader.style.margin = '0';
        }
  
        if (menuToggle) {
          menuToggle.style.display = 'block';
          menuToggle.style.margin = '10px';
        }
      } else {
        if (conteudo2) {
          conteudo2.style.flexDirection = '';
          conteudo2.style.alignItems = '';
          conteudo2.style.width = '';
          conteudo2.style.textAlign = '';
        }
  
        if (navTopoHeader) {
          navTopoHeader.style.display = '';
        }
  
        if (menuToggle) {
          menuToggle.style.display = '';
        }
      }
    };
  
    // Aplica estilos no load inicial
    applyResponsiveStyles();
  
    // Adiciona o listener para redimensionamento
    window.addEventListener('resize', applyResponsiveStyles);
  });