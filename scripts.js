// Selecionando os elementos do DOM
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
let lastPosition = items.length - 1;

// Função para definir o novo slide ativo
function setSlider() {
    // Remove a classe 'active' do item antigo
    let oldActive = document.querySelector('.item.active');
    if(oldActive) oldActive.classList.remove('active');

    // Remove a classe 'active' do ponto antigo
    let oldDot = document.querySelector('.dot.active');
    if(oldDot) oldDot.classList.remove('active');

    // Adiciona 'active' no novo item e ponto
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número indicador (01, 02, 03...)
    // padStart(2, '0') garante que tenha 2 dígitos (ex: 01)
    numberIndicator.innerText = String(active + 1).padStart(2, '0');
}

// Ação do botão Próximo
nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
}

// Ação do botão Anterior
prevBtn.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
}

// Autoplay: Troca automática a cada 5 segundos
let autoPlay = setInterval(() => {
    nextBtn.click();
}, 5000);

// Pausa o autoplay se o usuário interagir (opcional)
// Você pode adicionar lógica para limpar o intervalo se quiser