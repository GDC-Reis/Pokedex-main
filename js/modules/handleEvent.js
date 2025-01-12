import buscaPokemon from './buscaPokemon.js';

export default function pokemon() {
    const nomePokemon = document.getElementById('nomePokemon');
    const btnBuscaPokemon = document.getElementById('buttonFormPokemon');

    btnBuscaPokemon.addEventListener('click', handleEvent);

    function handleEvent(e) {
        e.preventDefault();
        const nomeDopokemon = nomePokemon.value.toLowerCase();
        buscaPokemon(nomeDopokemon);
    }
}