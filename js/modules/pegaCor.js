export default function pegaCor(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const colorPokemon = data.color.name;
            const divMostraPokemon = document.querySelector('.resultadoPesquisa');
            divMostraPokemon.style.backgroundColor = colorPokemon;
        });
}