const poke_container = document.getElementById('poke_container');
const pokemons_number = 898;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const typeColor = {
  bug: "#26de81",
  dragon: "#448b95",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#994025",
  fire: "#ab1f23",
  flying: "#4a677d",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#75515b",
  poison: "#6c5ce7",
  psychic: "#a6296c",
  rock: "#48180b",
  water: "#0190FF",
  steel:"#5f756d",
  dark: "#040706",
};

const getPokemon = async (id) => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites, types} = pokemon;
  const type = types[0].type.name;
  const type2 = types[1]?.type.name;
  const themeColor = typeColor[types[0].type.name];
  pokemonEl.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 36%, white 36%)`;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}"/>
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <a href="details.html?id=${id}" style="text-decoration: none; color: #000"><h3 class="name">${name}</h3></a>
    <div class="types-two" style="display: flex; flex-direction: column; gap: 5px">
    <small class="type" style=" color: #fff; padding: 5px 20px;
    border-radius: 20px;
    background: ${typeColor[types[0].type.name]}">${type} </small> 
     ${type2 ? `<small class="type" style=" color: #fff; padding: 5px 20px;
    border-radius: 20px; background: ${typeColor[types[1].type.name]}">${type2} </small>` : '' } 
    </div>
    </div>

`;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);

}


fetchPokemons();