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
        "id": 1       
    },
    {
        "tipo": 1,
        "nombre": "voltorb",
        "id": 2  
       
    },
    {
        "tipo": 1,
        "nombre": "magnamite",         
        "id": 3
    },
    {
        "tipo": 1,
        "nombre": "zapdos",        
        "id": 4
    },

    {
        "tipo": 2,
        "nombre": "sandshrew",  
        "id": 5     
    },
    {
        "tipo": 2,
        "nombre": "rhyhorn",
        "id": 6
    },
    {
        "tipo": 2,
        "nombre": "diglet",
        "id": 7
    },
    {
        "tipo": 2,
        "nombre": "cubone" ,  
        "id": 8      
    },

    {
        "tipo": 3,
        "nombre": "vulpix",   
        "id": 9     
    },
    {
        "tipo": 3,
        "nombre": "growlithe",   
        "id": 10      
    },
    {
        "tipo": 3,
        "nombre": "charmander" ,  
        "id": 11     
    },
    {
        "tipo": 3,
        "nombre": "torchic",    
        "id": 12     
    },
    
    {
        "tipo": 4,
        "nombre": "squirtle",  
        "id": 13       
    },
    {
        "tipo": 4,
        "nombre": "totodile",  
        "id": 14       
    },
    {
        "tipo": 4,
        "nombre": "magikarp",  
        "id": 15     
    },
    {
        "tipo": 4,
        "nombre": "psyduck",   
        "id": 16    
    },
]

let evolution = [
    {
        "id": 1,              
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
        "evoluciones": [
        {
            "nombre": "electrode",            
        },               
    ]
},
{
    "id": 3,    
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
    "evoluciones": [
        {
            "nombre": "zapdos",           
        },
    ]
},{
    "id": 5,
    "evoluciones" : [
        {
            "nombre": "Sandslash"
        }
    ]
},
{
    "id": 6,
    "evoluciones" : [
        {
            "nombre": "Rydhon"
        }
    ]
}
,
{
    "id": 7,
    "evoluciones" : [
        {
            "nombre": "Dugtrio"
        }
    ]
},
{
    "id": 8,
    "evoluciones" : [
        {
            "nombre": "Marowak"
        },
        {
            "nombre": "Marowak-alola"
        }
    ]
},
{
    "id": 9,
    "evoluciones" : [
        {
            "nombre": "Ninetales"
        },
        {
            "nombre": "Ninetales-Alola"
        }
    ]
},
{
    "id": 10,
    "evoluciones" : [
        {
            "nombre": "Arcanine"
        }
    ]
},
{
    "id": 11,
    "evoluciones" : [
        {
            "nombre": "Charmeleon"
        },
        {
            "nombre": "Charizard"
        }
    ]
},
{
    "id": 12,
    "evoluciones" : [
        {
            "nombre": "Combusken"
        },
        {
            "nombre": "Blaziken"
        }
    ]
},
{
    "id": 13,
    "evoluciones" : [
        {
            "nombre": "Wartortle"
        },
        {
            "nombre": "Blastoise"
        }
    ]
},
{
    "id": 14,
    "evoluciones" : [
        {
            "nombre": "Croconaw"
        },
        {
            "nombre": "Feraligart"
        }
    ]
},
{
    "id": 15,
    "evoluciones" : [
        {
            "nombre": "Gyarados"
        }
    ]
},
{
    "id": 16,
    "evoluciones" : [
        {
            "nombre": "Golduck"
        }
    ]
}
];

let atkPokemon = [
    {
        "id": 1,
        "ataque": [
            {
                "nombre": "impactrueno"
            },
            {
                "nombre": "atactrueno"
            },
            {
                "nombre": "Rayo"
            }
        
        ]
    },
    {
        "id": 2,
        "ataque" : [
            {
                "nombre" : "golpe roca",
            },
            {
                "nombre" : "roca afilada",
            },
            {
                "nombre" : "tormenta de arena"
            }
        ]
    },
    {
        "id": 3,
        "ataque" : [
            {
                "nombre" : "Lanza llamas",
            },
            {
                "nombre" : "Giro fuego",
            },
            {
                "nombre" : "tormenta de arena"
            }
        ]
    },
    {
        "id": 4,
        "ataque" : [
            {
                "nombre" : "Chorro de agua",
            },
            {
                "nombre" : "pistola de agua",
            },
            {
                "nombre" : "Hidrobomba"
            }
        ]
    }
]

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
                option.id = item.id;
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
            option.id = evo.id;
           
           
            evoCombo.appendChild(option);
        })
        
     });
     getAtk()
}

function getAtk(){
    let typePoke  = document.getElementById("tipo");
    let setPoke = typePoke.options[typePoke.selectedIndex];

    let filterAtk = [];

    for (var i = 0; i < atkPokemon.length; i++){
        let atkList = atkPokemon[i];

        if(setPoke.id == atkList.id ){
            filterAtk.push(atkList)
        }
    }

    let atkCombo = document.getElementById("atk")
    atkCombo.innerHTML = "";

    filterAtk.forEach(function(item){
        item.ataque.forEach(function(nameAtk){
            var atkOption = document.createElement("option");
            atkOption.text = nameAtk.nombre;
            atkOption.id = nameAtk.id; 
            atkCombo.appendChild(atkOption);
        })
        
    });
}