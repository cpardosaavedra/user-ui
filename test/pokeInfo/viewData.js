fetch ('https://pokeapi.co/api/v2/pokemon/pikachu',{
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

})
.catch(error =>{
    console.error('Error:', error.message);
})

// de apoco voy aprendiendo a usar fetch :D 

//unos ejemplos mas y aprendere bien :D 