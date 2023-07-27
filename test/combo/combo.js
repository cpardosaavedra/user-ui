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
        "nombre": "pikachu" 
    },
    {
        "tipo": 1,
        "nombre": "raichu" 
    },
    {
        "tipo": 1,
        "nombre": "joteon" 
    },
    {
        "tipo": 1,
        "nombre": "zapdos" 
    },

    {
        "tipo": 2,
        "nombre": "Sandslash" 
    },
    {
        "tipo": 2,
        "nombre": "sandsrew" 
    },
    {
        "tipo": 2,
        "nombre": "diglet" 
    },
    {
        "tipo": 2,
        "nombre": "cubone" 
    },

    {
        "tipo": 3,
        "nombre": "ninetales" 
    },
    {
        "tipo": 3,
        "nombre": "growlithe" 
    },
    {
        "tipo": 3,
        "nombre": "flareon" 
    },
    {
        "tipo": 3,
        "nombre": "torchic" 
    },
    
    {
        "tipo": 4,
        "nombre": "squirtle" 
    },
    {
        "tipo": 4,
        "nombre": "totodile" 
    },
    {
        "tipo": 4,
        "nombre": "magikarp" 
    },
    {
        "tipo": 4,
        "nombre": "psyduck" 
    },
]

function llenarCombo() {
    var tipoCombo = document.getElementById("tipo");

    tipo.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item.value;
        option.id = item.id;
        tipoCombo.appendChild(option);
    });

}

function getPokemon() {
    let tipoCombo = document.getElementById("tipo");
    let tipoSelected = tipoCombo.options[tipoCombo.selectedIndex];

    let pokemonsFilter = new Array();

    for (var i = 0; pokemon.length > i; i++) {
        let pokemonSelected = pokemon[i];

        if (tipoSelected.id == pokemonSelected.tipo) {
            pokemonsFilter.push(pokemonSelected);
        }
    }

    let pokemonCombo = document.getElementById("pokemon")
    pokemonCombo.innerHTML = ""

    pokemonsFilter.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item.nombre;
        option.id = item.tipo;
        pokemonCombo.appendChild(option);
    });
}

