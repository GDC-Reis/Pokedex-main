export default function pegaCor(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const colorPokemon = data.color.name;
            const divMostraPokemon = document.querySelector('.resultadoPesquisa');
            divMostraPokemon.style.backgroundColor = colorPokemon;
            if(colorPokemon === 'black'){
                const nomePokemonBase = document.querySelector('.nome');
                nomePokemonBase.style.color = 'white';
            }
        });
}