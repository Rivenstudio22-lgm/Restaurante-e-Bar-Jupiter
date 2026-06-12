// ==========================================
// CONTROLO DO MENU (EFEITO YOUTUBE KIDS)
// ==========================================
const btnMenu = document.getElementById('btn-menu');
const btnHeroMenu = document.getElementById('btn-hero-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', openMenu);
btnHeroMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuOverlay.classList.contains('open')) {
        closeMenu();
    }
});

// =======================================================
// GERAÇÃO E LÓGICA AUTOMÁTICA PARA AS 30 FOTOS DE FUNDO
// =======================================================
const slideshowContainer = document.getElementById('hero-slideshow');
const totalImagens = 30; // Altere este número se o total de fotos mudar no futuro
const tempoPorSlide = 4000; // Troca a cada 4 segundos

// Criar dinamicamente os 30 elementos de imagem para poupar linhas no HTML
for (let i = 1; i <= totalImagens; i++) {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    
    // Caminho da foto baseado no número (ex: imagens/foto1.jpg)
    slideElement.style.backgroundImage = `url('imagens/foto${i}.jpg')`;
    
    // Deixa a primeira foto ativa no arranque do site
    if (i === 1) {
        slideElement.classList.add('active');
    }
    
    slideshowContainer.appendChild(slideElement);
}

// Lógica de rotação do carrossel
const todosOsSlides = document.querySelectorAll('.slide');
let indiceAtual = 0;

function transicaoImagens() {
    // Remove o efeito visível da imagem atual
    todosOsSlides[indiceAtual].classList.remove('active');
    
    // Avança para o próximo número (se passar de 30, volta para o 0 automaticamente)
    indiceAtual = (indiceAtual + 1) % todosOsSlides.length;
    
    // Ativa a visibilidade na nova imagem com fade suave via CSS
    todosOsSlides[indiceAtual].classList.add('active');
}

// Inicia o temporizador automático
setInterval(transicaoImagens, tempoPorSlide);
