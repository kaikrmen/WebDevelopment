const url =`https://pokeapi.co/api/v2/pokemon`



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

const getOnePokemon = async () => {
    let params = new URLSearchParams(location.search)
    let id = params.get('id')

    console.log(id)

    const res = await fetch(`${url}/${id}`);
    const pokemon = await res.json();
    createPokemonCard(pokemon)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const type2 = types[1]?.type.name;
    const weigths = pokemon.weight  / 10 
    const heigths = pokemon.height  / 10 
    const stat =  pokemon.stats[0].base_stat
    const stat1 = pokemon.stats[1].base_stat;
    const stat2 = pokemon.stats[2].base_stat;
    const stat3 = pokemon.stats[3].base_stat;
    const stat4 = pokemon.stats[4].base_stat;
    const stat5 = pokemon.stats[5].base_stat;
    const total = stat + stat1 + stat2 + stat3 + stat4 + stat5
    const m = pokemon.moves
    const moves = pokemon.moves.map((x)=>{
     return {
        moveName:x.move.name,   
        levelLearned:x.version_group_details[0].level_learned_at
      }
      }).sort((a,b)=>{
        return (a.levelLearned - b.levelLearned) ||( a.moveName.localeCompare(b))
      })
    console.log(moves)
      console.log(m)
    const themeColor = typeColor[types[0].type.name];
    pokemonEl.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 36%, white 36%)`;
    const pokeInnerHTML = `
    <div class="img-container">
      <img src="${sprites.front_default}" alt="${name}"/>
    </div>
    <div class="info">
      <span class="number">${id}</span>
      <h3 class="name">${name}</h3>
      <div class="types-two" style="display: flex; justify-content: center; gap: 5px">
      <small class="type" style=" color: #fff; padding: 5px 20px;
      border-radius: 20px;
      background: ${typeColor[types[0].type.name]}">${type} </small> 
       ${type2 ? `<small class="type" style=" color: #fff; padding: 5px 20px;
      border-radius: 20px; background: ${typeColor[types[1].type.name]}">${type2} </small>` : '' } 
      </div>
      <div style="display: flex; flex-direction: row; align-items: stretch; justify-content: space-evenly; ">
    <p>
    <small class="type" style=" color: #fff; padding: 5px 20px;
    border-radius: 20px;
    background: ${typeColor[types[0].type.name]}"> weight:  <span>${weigths} Kg.</span></small> 
    </p>
    <p>
    <small class="type" style=" color: #fff; padding: 5px 20px;
    border-radius: 20px;
    background: ${typeColor[types[0].type.name]}"> height: <span>${heigths} M.</span></span></small> 
    </p>
  </div>
    
      <div style="display: flex; gap: 20px;">
      <div>
          <div style="background: #DF2140; ">
              HP
          </div>
          <h5>${stat}</h5>
      </div>
      <div>
          <div style="background: #FF994D">
              ATK
          </div>
          <h5>${stat1}</h5>
      </div>
      <div>
          <div  style="background: #eecd3d">
              DEF
          </div>
          <h5>${stat2}</h5>
      </div>
      <div >
          <div style="background: #85DDFF">
              SpA
          </div>
          <h5>${stat3}</h5>
      </div>
      <div>
          <div  style="background: #96da83">
              SpD
          </div>
          <h5>${stat4}</h5>
      </div>
      <div>
          <div style="background: #FB94A8">
              SPD
          </div>
          <h5>${stat5}</h5>
      </div>
      <div style="background: #88AAEA">
          <div style="background: #7195DC">
              TOT
          </div>
          <h5>${total}</h5>
      </div>
  </div>

      </div>
  
  `;
    pokemonEl.innerHTML = pokeInnerHTML;
      poke_container.appendChild(pokemonEl);
  
  }
  

getOnePokemon()