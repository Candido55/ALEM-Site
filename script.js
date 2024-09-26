// Seleciona todos os elementos de linha horizontal (hr)
const tracos = document.querySelectorAll('.tracos_item');

let currentTraco = 0; // Começa no primeiro traco

function animateTraco() {
    // Remove a animação corrente de todos os tracos
    tracos.forEach(traco => {
        traco.querySelector('::before');
        traco.classList.remove('active'); // Remove a classe "active" de todos
    });

    // Adiciona animação ao traco atual
    const tracoAtual = tracos[currentTraco];
    tracoAtual.classList.add('active'); // Adiciona a classe "active" ao traco atual

    // Muda para o próximo traco após a animação
    currentTraco = (currentTraco + 1) % tracos.length; // Garante que volte ao primeiro traco após o último
}

const tracos2 = document.querySelectorAll('.tracos_item2');

let currentTraco2 = 0; // Começa no primeiro traco

function animateTraco2() {
    // Remove a animação corrente de todos os tracos
    tracos2.forEach(traco => {
        traco.querySelector('::before');
        traco.classList.remove('active'); // Remove a classe "active" de todos
    });

    // Adiciona animação ao traco atual
    const tracoAtual = tracos2[currentTraco];
    tracoAtual.classList.add('active'); // Adiciona a classe "active" ao traco atual

    // Muda para o próximo traco após a animação
    currentTraco2 = (currentTraco2 + 1) % tracos2.length; // Garante que volte ao primeiro traco após o último
}

// Inicia a animação e repete a cada 2 segundos
setInterval(animateTraco, 3000);
setInterval(animateTraco2, 3000);



