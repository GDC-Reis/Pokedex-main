import primeiraEvolucao from "./primeiraEvolucao.js";
import ultimaEvolucao from "./ultimaEvolucao.js";

export default function buscaEvolucao(url, name) {
     const modalImg = document.querySelector('.cadeiaEvolutiva');
    modalImg.innerHTML = '';  

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const evolutionChainUrl = data.evolution_chain.url;
            return fetch(evolutionChainUrl);
        })
        .then((response) => response.json())
        .then((data) => {
            
            const evolucaoPrimeira = data.chain.evolves_to[0];
            const evolucaoUltima = data.chain.evolves_to[0].evolves_to[0];

            
            const urlPrimeiraEvolucao = evolucaoPrimeira.species.name;
            const urlUltimaEvolucao = evolucaoUltima.species.name;

            console.log('Primeira Evolução:', urlPrimeiraEvolucao);
            console.log('Última Evolução:', urlUltimaEvolucao);

            if (name === urlUltimaEvolucao) {
                console.log('Este é o Pokémon final da cadeia de evolução');
                modalImg.style.display = "none";  
            } else if (name === urlPrimeiraEvolucao) {
                console.log('Este é o primeiro Pokémon da cadeia de evolução');
                ultimaEvolucao(`https://pokeapi.co/api/v2/pokemon/${urlUltimaEvolucao}`); 
            } else {
                primeiraEvolucao(`https://pokeapi.co/api/v2/pokemon/${urlPrimeiraEvolucao}`);
                ultimaEvolucao(`https://pokeapi.co/api/v2/pokemon/${urlUltimaEvolucao}`);
            }
        })
        .catch((error) => {
            console.log('Erro ao buscar evolução: ', error);
        });
}
