function getData() {
    var pokeName = document.getElementById("pokemonName").value;
    

    console.log("el pokemon seleccionado: " + pokeName);

    fetch ('https://pokeapi.co/api/v2/pokemon/' + pokeName,{
    method: 'GET',
    headers: {
        'content-Type':'application/json',
    },
    body: JSON.stringify()
})

.then(response => {
    if(!response.ok) {
        throw new Error('No se puedo obtener la información del pokémon');        
       }   return response.json()
    
})
.then(data =>{
    console.log('Información del pokémon: ',data);
    console.log('Nombre del Pokémon: ', data.name);
    console.log('Altura del pokemon:', data.height);
    console.log('Peso del Pokémon: ',data.weight);
    // document.getElementById("showPokeData").innerHTML = JSON.stringify(data); 
    //mostrar info en la pagina web ya sea en una table, o en la wea te salga de los cojones, pero muestrala y
    //se tiene que actualizar, cada vez que yo busque un pokemon diferente
        document.getElementById("namepoke").innerHTML = data.name;
        document.getElementById("typePoke").innerHTML = data.types[0].type.name;;
        document.getElementById("height").innerHTML = data.height;
        document.getElementById("weight").innerHTML = data.weight;

    
    //si no se encuntra, mostrar un mensaje en pantalla diciendo: pokemon "pokemon" no encontrado.
})
.catch(error =>{
    console.error('Error:', error.message);
    console.log(pokeName+" Este Pokémon no ha sido encontrado");
})
}


