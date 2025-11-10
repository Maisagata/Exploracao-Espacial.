// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões
    const exploreBtn = document.getElementById('explore-planets-btn');
    const missionsBtn = document.getElementById('view-missions-btn');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Função para lidar com o clique
    const handleButtonClick = (action) => {
        alert(`Ação: ${action} - Esta é apenas uma simulação. O código completo de navegação e conteúdo de "Planetas" ou "Missões" precisaria ser implementado!`);
        console.log(`Botão clicado: ${action}`);
    };

    // Adiciona o evento de clique ao botão "Explorar Planetas"
    exploreBtn.addEventListener('click', () => {
        handleButtonClick('Explorar Planetas');
    });

    // Adiciona o evento de clique ao botão "Ver Missões"
    missionsBtn.addEventListener('click', () => {
        handleButtonClick('Ver Missões');
    });

    // Adiciona um comportamento à seta para baixo (ex: rolar a página)
    scrollIndicator.addEventListener('click', () => {
        // Simula uma rolagem para a próxima seção
        alert('Ação: Rolar para baixo (Próxima seção)');
        console.log('Indicador de rolagem clicado.');
    });
});