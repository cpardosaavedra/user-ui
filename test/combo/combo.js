// Evento que se ejecuta cuando se carga el contenido del DOM
document.addEventListener("DOMContentLoaded", llenarCombo);

let tipo = [
    {
        "id": 1, 
        "value": "electrico"
    }, 
    {
        "id": 2, 
        "value": "tierra"
    }, 
    {
        "id": 3, 
        "value": "fuego"
    }, 
    {
        "id": 4, 
        "value": "agua"
    }
];

let pokemon = [
    {
        "tipo": 1,
        "nombre": "pikachu",
        "evoname": "pikachu"
    },
    {
        "tipo": 1,
        "nombre": "voltorb",
        "evoname": "voltorb"
    },
    {
        "tipo": 1,
        "nombre": "magnamite", 
        "evoname": "magnamite"
    },
    {
        "tipo": 1,
        "nombre": "zapdos",
        "evoname": "NONE!!"
    },

    {
        "tipo": 2,
        "nombre": "sandshrew",
        "evoname": "sandshrew"
    },
    {
        "tipo": 2,
        "nombre": "rhyhorn",
        "evoname": "rhyhorn"
    },
    {
        "tipo": 2,
        "nombre": "diglet",
        "evoname": "diglet"
    },
    {
        "tipo": 2,
        "nombre": "cubone" ,
        "evoname": "cubone"
    },

    {
        "tipo": 3,
        "nombre": "vulpix",
        "evoname": "vulpix"
    },
    {
        "tipo": 3,
        "nombre": "growlithe", 
        "evoname": "growlithe"
    },
    {
        "tipo": 3,
        "nombre": "charmander" ,
        "evoname": "vulpix"
    },
    {
        "tipo": 3,
        "nombre": "torchic", 
        "evoname": "charmande"
    },
    
    {
        "tipo": 4,
        "nombre": "squirtle", 
        "evoname": "squirtle"
    },
    {
        "tipo": 4,
        "nombre": "totodile", 
        "evoname": "totodile"
    },
    {
        "tipo": 4,
        "nombre": "magikarp",
        "evoname": "magikarp"
    },
    {
        "tipo": 4,
        "nombre": "psyduck",
        "evoname": "psyduck"
    },
]

let evolution = [
    {
        "nombre": "Pikachu",
        "tipo": "Eléctrico",
        "evoluciones": [
            {
                "name": "Pichu",
                "tipo": "Eléctrico",
                "nivel": "Nivel de amistad"
            },
            {
                "name": "Pikachu",
                "tipo": "Eléctrico",
                "nivel": "Piedra trueno"
            },
            {
                "name": "Raichu",
                "tipo": "Eléctrico",
                "nivel": "Piedra trueno"
            }
        ]
    },{
    "nombre": "voltorb",
    "tipo": "Eléctrico",
    "evoluciones": [
        {
            "name": "voltorb",
            "tipo": "Eléctrico",
            "nivel": "20"
        },
        {
            "name": "electrode",
            "tipo": "Eléctrico",
            "nivel": "no hay mas evoluciones"
        },        
    ]
},
{
    "nombre": "magnamite",
    "tipo": "Eléctrico",
    "evoluciones": [
        {
            "name": "magnamite",
            "tipo": "Eléctrico",
            "nivel": "30"
        },
        {
            "name": "Magneton",
            "tipo": "Eléctrico",
            "nivel": "campo Magnetico lvl 30"
        },   
        {
            "name": "magnezone",
            "tipo": "Eléctrico",
            "nivel": "no hay mas evoluciones"
        },      
    ]
},
{
    "nombre": "zapdos",
    "tipo": "Eléctrico",
    "evoluciones": [
        {
            "name": "zapdos",
            "tipo": "Eléctrico",
            "nivel": "no tiene evolucion"
        },
]
}
];

let filterEvo = [];

        // Función para llenar el combo de tipos de Pokémon al cargar la página
        function llenarCombo() {
            var tipoCombo = document.getElementById("tipo");

            tipo.forEach(function(item) {
                var option = document.createElement("option");
                option.text = item.value;
                option.id = item.id;
                tipoCombo.appendChild(option);
            });

            getPokemon(); // Llenar el combo de Pokémon una vez que se han cargado los tipos
        }

        // Función para filtrar y llenar el combo de Pokémon según el tipo seleccionado
        function getPokemon() {
            let tipoCombo = document.getElementById("tipo");
            let tipoSelected = tipoCombo.options[tipoCombo.selectedIndex];

            let pokemonsFilter = [];

            for (var i = 0; i < pokemon.length; i++) {
                let pokemonSelected = pokemon[i];

                if (tipoSelected.id == pokemonSelected.tipo) {
                    pokemonsFilter.push(pokemonSelected);
                }
            }

            let pokemonCombo = document.getElementById("pokemon")
            pokemonCombo.innerHTML = "";

            pokemonsFilter.forEach(function(item) {
                var option = document.createElement("option");
                option.text = item.nombre;
                option.id = item.tipo;
                pokemonCombo.appendChild(option);
            });

            getEvolutions(); // Llenar el combo de evoluciones una vez que se han cargado los Pokémon
        }

        // Función para filtrar y llenar el combo de evoluciones según el Pokémon seleccionado
        function getEvolutions() {
            let pokeEvo = document.getElementById('pokemon');
            let evoSelected = pokeEvo.options[pokeEvo.selectedIndex].text;

            filterEvo = [];

            for (var i = 0; i < evolution.length; i++) {
                let evolutionSelected = evolution[i];

                if (evoSelected == evolutionSelected.nombre) {
                    filterEvo.push(evolutionSelected);
                }
            }
            let evoCombo = document.getElementById("evo")
            evoCombo.innerHTML = ""

            filterEvo.forEach(function(item) {
                var option2 = document.createElement("option");
                var option3 = document.createElement("option");
                option2.text = item.evoluciones[0].name;// Mostramos el nombre de la evolución
                evoCombo.appendChild(option2);
            });
        }
// // Función para llenar el combo de tipos de pokemon al cargar la página
// function llenarCombo() {
//     var tipoCombo = document.getElementById("tipo");

//     tipo.forEach(function(item) {
//         var option = document.createElement("option");
//         option.text = item.value;
//         option.id = item.id;
//         tipoCombo.appendChild(option);
//     });

// }
//  // Función para filtrar y llenar el combo de pokemons según el tipo seleccionado
// function getPokemon() {
//     let tipoCombo = document.getElementById("tipo");
//     let tipoSelected = tipoCombo.options[tipoCombo.selectedIndex];

//     let pokemonsFilter = new Array();

//     for (var i = 0; pokemon.length > i; i++) {
//         let pokemonSelected = pokemon[i];

//         if (tipoSelected.id == pokemonSelected.tipo) {
//             pokemonsFilter.push(pokemonSelected);
//         }
//     }

//     let pokemonCombo = document.getElementById("pokemon")
//     pokemonCombo.innerHTML = ""

//     pokemonsFilter.forEach(function(item) {
//         var option = document.createElement("option");
//         option.text = item.nombre;
//         option.id = item.tipo;
//         pokemonCombo.appendChild(option);
//     });

// //Filtrado para las evoluciones 
//     let pokeEvo = document.getElementById('pokemon');
//     let evoSelected = pokeEvo.options[pokeEvo.selectedIndex];

//     let filterEvo = new Array();

//     for (var i = 0; evolution.length > i; i++) {
//         let evolutionSelected = evolution[i];

//         if (evoSelected.value == evolutionSelected.nombre) {
//             filterEvo.push(evolutionSelected);
//         }
//     }
//     let evoCombo = document.getElementById("evo")
//    evoCombo.innerHTML = ""

//    filterEvo.forEach(function(item) {
//         var option2 = document.createElement("option");
//         option2.text = item.evoluciones[0].nombre; // Mostramos el nombre de la evolución
//         evoCombo.appendChild(option2);
//     });
    

// }

