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
        "idPoke": 1       
    },
    {
        "tipo": 1,
        "nombre": "voltorb",
        "idPoke": 2  
       
    },
    {
        "tipo": 1,
        "nombre": "magnamite",         
        "idPoke": 3
    },
    {
        "tipo": 1,
        "nombre": "zapdos",        
        "idPoke": 4
    },

    {
        "tipo": 2,
        "nombre": "sandshrew",       
    },
    {
        "tipo": 2,
        "nombre": "rhyhorn",
       
    },
    {
        "tipo": 2,
        "nombre": "diglet",
        
    },
    {
        "tipo": 2,
        "nombre": "cubone" ,        
    },

    {
        "tipo": 3,
        "nombre": "vulpix",        
    },
    {
        "tipo": 3,
        "nombre": "growlithe",         
    },
    {
        "tipo": 3,
        "nombre": "charmander" ,       
    },
    {
        "tipo": 3,
        "nombre": "torchic",         
    },
    
    {
        "tipo": 4,
        "nombre": "squirtle",         
    },
    {
        "tipo": 4,
        "nombre": "totodile",         
    },
    {
        "tipo": 4,
        "nombre": "magikarp",       
    },
    {
        "tipo": 4,
        "nombre": "psyduck",       
    },
]

let evolution = [
    {
        "id": 1,
        "nombre": "Pikachu",               
        "evoluciones": [
            {
                "nombre": "Pichu"
            },
            {
                "nombre": "Raichu"
            },         
        ]
    },{
        "id": 2,
        "nombre": "voltorb",        
        "evoluciones": [
        {
            "nombre": "electrode",            
        },               
    ]
},
{
    "id": 3,
    "nombre": "magnamite",   
    "evoluciones": [
        {
            "nombre": "magnetone"
        },
        {
            "nombre": "magnezone"
        },             
    ]
},
{
    "id": 4,
    "nombre": "zapdos",    
    "evoluciones": [
        {
            "nombre": "zapdos",           
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

            getTipo(); // Llenar el combo de Pokémon una vez que se han cargado los tipos
        }

        // Función para filtrar y llenar el combo de Pokémon según el tipo seleccionado
        function getTipo() {
            let tipoCombo = document.getElementById("tipo");
            let tipoSelected = tipoCombo.options[tipoCombo.selectedIndex];

            let pokemonsFilter = [];

            for (var i = 0; i < pokemon.length; i++) {
                let pokemonSelected = pokemon[i];

                if (tipoSelected.id == pokemonSelected.tipo) {
                    pokemonsFilter.push(pokemonSelected);
                }
            }

            let pokemonCombo = document.getElementById("addpokemon")
            pokemonCombo.innerHTML = "";

            pokemonsFilter.forEach(function(item) {
                var option = document.createElement("option");
                option.text = item.nombre;
                option.id = item.tipo;
                pokemonCombo.appendChild(option);
            });  
            
            
            getEvolution ()
           
        }

function getEvolution (){
     // Filtro de evoluciones 
     let getPokemon = document.getElementById("addpokemon");
     let pokemonSet = getPokemon.options[getPokemon.selectedIndex];

     let filterEvolution = [];

     for(var i = 0; i < evolution.length; i++){
         let evoList = evolution[i];

         if (pokemonSet.id == evoList.id){                    
             filterEvolution.push(evoList)
             
         }

     }
     
     let evoCombo = document.getElementById("evo")
     evoCombo.innerHTML = "";

     filterEvolution.forEach(function(item) {
        item.evoluciones.forEach(function(evo){
            var option = document.createElement("option");            
            option.text = evo.nombre; 
           
           
            evoCombo.appendChild(option);
        })
         
     });

}