export default function ultimaEvolucao(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const divEvolucao = document.querySelector('.cadeiaEvolutiva');
            const imgEvolucao = document.createElement('img');
            imgEvolucao.classList.add("evolucoesPokemon");
            imgEvolucao.src = data.sprites.other["official-artwork"].front_default;
            imgEvolucao.alt = data.name;
            divEvolucao.appendChild(imgEvolucao);
        })
        .catch((error) => {
            console.log('Erro ao carregar primeira evolução:', error);
        });
}