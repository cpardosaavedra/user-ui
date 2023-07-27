function getData() {
  var combobox = document.getElementById("pokemonSelect");
  var selectedPokemon = combobox.value;

  fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemon)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      return response.json();
    })
    .then(data => {
      var pokemonInfo = document.getElementById("pokemonInfo");
      var recibeImg = data.sprites.front_default;     
      var getId = data.id
      pokemonInfo.innerHTML = `
        <p>Numero en Pokédex: ${getId}</p>
        <p>Nombre: ${data.name}</p>
        <p>Tipo: ${data.types[0].type.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>          
        <img class="imagen" src="${recibeImg}"> </img>          
      `;
      
      const speciesUrl = data.species.url;
      return fetch(speciesUrl);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      return response.json();
    })
    .then(speciesData => {
      const evolutionUrl = speciesData.evolution_chain.url;
      return fetch(evolutionUrl);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de evoluciones del Pokémon');
      }
      return response.json();
    })
    .then(evolutionData => {
      const evolutionChain = mostrarCadenaEvolucion(evolutionData.chain);
      mostrarEvoluciones(`Evoluciones de ${selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1)}: ${evolutionChain}`);
    })
    .catch(error => mostrarMensaje("Error al obtener informacion del pokemon. " + error.message));
}

function mostrarCadenaEvolucion(chain) {
  let cadena = "";

  while (chain) {
    const especie = chain.species.name;
    cadena += ` -> ${especie.charAt(0).toUpperCase() + especie.slice(1)}`;

    if (chain.evolves_to && chain.evolves_to.length > 0) {
      chain = chain.evolves_to[0];
    } else {
      break;
    }
  }

  return cadena;
}

function mostrarEvoluciones(cadena) {
  const evolutionChainElement = document.getElementById("evolutionChain");
  evolutionChainElement.textContent = cadena;
}

function mostrarMensaje(mensaje) {
  const evolutionChainElement = document.getElementById("evolutionChain");
  evolutionChainElement.textContent = mensaje;
}




  
  // este fetch es para llamar a los 151 Pokémon de la primera temporada
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
      
      var combobox = document.getElementById("pokemonSelect");
      var results = data.results;
  
      results.forEach(pokemon => {
        var option = document.createElement("option");
        option.text = pokemon.name;
        option.value = pokemon.name;
        combobox.appendChild(option);        
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
