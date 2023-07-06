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
        pokemonInfo.innerHTML = `
          <p>Nombre: ${data.name}</p>
          <p>Tipo: ${data.types[0].type.name}</p>
          <p>Altura: ${data.height}</p>
          <p>Peso: ${data.weight}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error.message);
        var pokemonInfo = document.getElementById("pokemonInfo");
        pokemonInfo.innerHTML = "No se pudo obtener la información del Pokémon";
      });
  }
  
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
  