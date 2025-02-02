import buscaEvolucao from './buscaEvolucao.js';
import pegaCor from './pegaCor.js';

export default function buscaPokemon(nome) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'data');

            const namePokemon = data.name;
            const nomePokemonBase = document.querySelector('.nome');
            const imagemFormaBase = document.querySelector('.formaBase');

            nomePokemonBase.innerText = data.name;
            imagemFormaBase.src = data.sprites.other["official-artwork"].front_default;

            const urlSpecies = data.species.url;

            pegaCor(urlSpecies);
            buscaEvolucao(urlSpecies, namePokemon);

            return nomePokemonBase;

        })
        .catch((error) => {
            console.error("Erro ao buscar Pokémon:", error);

            const divMostraPokemon = document.querySelector('.pokemonBase');
            const sectionResultadoPesquisa = document.querySelector('.resultadoPesquisa');
            sectionResultadoPesquisa.style.backgroundColor = 'red';

            let erroExistente = document.querySelector('.erro-pokemon');
            if (erroExistente) {
                erroExistente.remove();
            }

            const novoParagrafo = document.createElement('p');
            novoParagrafo.classList.add('erro-pokemon');
            novoParagrafo.textContent = 'Pokémon não encontrado';
            divMostraPokemon.appendChild(novoParagrafo);
        });
}