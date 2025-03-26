 // Seleciona as features
 const features = document.querySelectorAll('.feature');

 let currentIndex = 0; // Índice do item centralizado

 function updateCarousel() {
   // Remove a classe 'active' de todos os itens
   features.forEach((feature, index) => {
     feature.classList.remove('active');
     
     // Marca o item centralizado com a classe 'active'
     if (index === currentIndex) {
       feature.classList.add('active');
     }
   });
 }

 // Inicializa o carrossel
 updateCarousel();

 // Adiciona navegação clicando na feature
 features.forEach((feature, index) => {
   feature.addEventListener('click', () => {
     currentIndex = index; // Atualiza o índice para o item clicado
     updateCarousel(); // Atualiza a posição do carrossel
   });
 });

 // Para navegação manual (se quiser adicionar botões de navegação, por exemplo)
 document.addEventListener('keydown', (event) => {
   if (event.key === 'ArrowRight') {
     nextItem(); // Avança ao próximo item
   } else if (event.key === 'ArrowLeft') {
     prevItem(); // Volta ao item anterior
   }
 });

// Seleciona as features e os elementos
const feature = document.querySelectorAll('.feature');
const bikesSection = document.getElementById('bikes-cards');
const manutencaoForm = document.getElementById('manutencao-form');
const sectionTitle = document.getElementById('section-title');

// Função para atualizar a exibição conforme a opção clicada
function updateSection(feature) {
 if (feature === 'bikes') {
   bikesSection.style.display = 'grid';
   manutencaoForm.style.display = 'none';
   sectionTitle.textContent = 'Bikes';
 } else if (feature === 'manutencao') {
   bikesSection.style.display = 'none';
   manutencaoForm.style.display = 'block';
   sectionTitle.textContent = 'Agendamento de Manutenção';
 } else {
   bikesSection.style.display = 'none';
   manutencaoForm.style.display = 'none';
 }
}

// Adiciona evento de clique nas features
features.forEach(feature => {
 feature.addEventListener('click', () => {
   const featureType = feature.getAttribute('data-feature');
   updateSection(featureType);
 });
});

// Inicializa a página exibindo a seção de Bikes
updateSection('bikes');
