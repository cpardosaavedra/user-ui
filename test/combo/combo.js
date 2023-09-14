// Evento que se ejecuta cuando se carga el contenido del DOM
document.addEventListener("DOMContentLoaded", llenarCombo);

// Función para llenar el combo de tipos de Pokémon al cargar la página
function llenarCombo() {
    var tipoCombo = document.getElementById("tipo");

    // Limpia el combo de tipos
    tipoCombo.innerHTML = '<option value="" selected>Selecciona un tipo</option>';

    tipo.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item.value;
        option.id = item.id;
        tipoCombo.appendChild(option);
    });
    //Limpia los otros combos
    limpiarCombo("addpokemon");
    limpiarCombo("evo");
    limpiarCombo("atk");
    // getTipo(); // Llenar el combo de Pokémon una vez que se han cargado los tipos
}
// Función para limpiar un combo
function limpiarCombo(idCombo) {
    var combo = document.getElementById(idCombo);
    combo.innerHTML = "";
}

// Función para filtrar y llenar el combo de Pokémon según el tipo seleccionado
function getTipo() {
    let tipoCombo = document.getElementById("tipo");
    let tipoSelected = tipoCombo.options[tipoCombo.selectedIndex];


    if(tipoSelected ===""){
        // Si no se ha seleccionado un tipo, limpiar los otros combos
        limpiarCombo("addpokemon");
        limpiarCombo("evo");
        limpiarCombo("atk");
    }else{
       var pokemonsFilter = [];

        for (var i = 0; i < pokemon.length; i++) {
            let pokemonSelected = pokemon[i];
    
            if (tipoSelected.id == pokemonSelected.tipo) {
                pokemonsFilter.push(pokemonSelected);
            }
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
    getEvolution();
    getAtaque();       
}

function getEvolution(){
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
}

//realiza la comparacion de tipo.id y el atk.id
function getAtaque(){
    let typePoke  = document.getElementById("tipo");
    let setPoke = typePoke.options[typePoke.selectedIndex];

    let filterAtk = [];

    for (var i = 0; i < atkPokemon.length; i++){
        let atkList = atkPokemon[i];

        if(setPoke.id == atkList.id ){
            filterAtk.push(atkList)
        }
    }
    // agrega los ataques encontrados segun el filtro realizado
    let atkCombo = document.getElementById("atk");
    atkCombo.innerHTML = "";

    filterAtk.forEach(function(item){
        item.ataque.forEach(function(addAtk){
            var atkOption = document.createElement("option");
            atkOption.text = addAtk.nombre;
            atkOption.id = addAtk.id; 
            atkCombo.appendChild(atkOption);          
        })       
    });    
}   

function crearTabla() {
   
     // Obtener los valores seleccionados en los combos
     var tipoCombo = document.getElementById("tipo");
     var tipoSeleccionado = tipoCombo.options[tipoCombo.selectedIndex].textContent;
    
//verifica si se a seleccionado algun tipo
if(tipoSeleccionado === "Selecciona un tipo"){
    alert("Debes seleccionar un tipo de Pokémon para continuar.");
    return;
   }

     var pokemonCombo = document.getElementById("addpokemon");
     var pokemonSeleccionado = pokemonCombo.options[pokemonCombo.selectedIndex].textContent;
 
     var evoCombo = document.getElementById("evo");
     var evoSeleccionado = evoCombo.options[evoCombo.selectedIndex].textContent;
 
     var atkCombo = document.getElementById("atk");
     var atkSeleccionado = atkCombo.options[atkCombo.selectedIndex].textContent;
 
     // Crear un elemento de tabla
     var tabla = document.createElement("table");
 
     // Crear un elemento de encabezado de tabla (thead)
     var encabezado = document.createElement("thead");
 
     // Crear una fila de encabezado (tr)
     var filaEncabezado = document.createElement("tr");
 
     // Crear celdas de encabezado (th)
     var encabezadoTipo = document.createElement("th");
     var encabezadoPokemon = document.createElement("th");
     var encabezadoEvo = document.createElement("th");
     var encabezadoAtk = document.createElement("th");
     var encabezadoImagen = document.createElement("th"); // Nueva celda para la imagen
 
     // Establecer el texto de las celdas de encabezado
     encabezadoTipo.textContent = "TIPO";
     encabezadoPokemon.textContent = "POKÉMON";
     encabezadoEvo.textContent = "EVOLUCIÓN";
     encabezadoAtk.textContent = "ATAQUE";
     encabezadoImagen.textContent = "IMAGEN"; // Texto para la celda de imagen
 
     // Agregar las celdas de encabezado a la fila de encabezado
     filaEncabezado.appendChild(encabezadoTipo);
     filaEncabezado.appendChild(encabezadoPokemon);
     filaEncabezado.appendChild(encabezadoEvo);
     filaEncabezado.appendChild(encabezadoAtk);
     filaEncabezado.appendChild(encabezadoImagen); // Agregar la celda de imagen a la fila de encabezado
     
     // Agregar la fila de encabezado al elemento de encabezado de tabla
     encabezado.appendChild(filaEncabezado);
 
     // Crear un elemento de cuerpo de tabla (tbody)
     var cuerpoTabla = document.createElement("tbody");
 
     // Crear una fila de datos (tr)
     var filaDatos = document.createElement("tr");
 
     // Crear celdas de datos (td)
     var datoTipo = document.createElement("td");
     var datoPokemon = document.createElement("td");
     var datoEvo = document.createElement("td");
     var datoAtk = document.createElement("td");
     var datoImagen = document.createElement("td"); // Nueva celda para la imagen
 
     // Establecer el texto de las celdas de datos con los valores seleccionados
     datoTipo.textContent = tipoSeleccionado;
     datoPokemon.textContent = pokemonSeleccionado;
     datoEvo.textContent = evoSeleccionado;
     datoAtk.textContent = atkSeleccionado;
    
     
     datoTipo.textContent = tipoSeleccionado;
    datoPokemon.textContent = pokemonSeleccionado;
    datoEvo.textContent = evoSeleccionado;
    datoAtk.textContent = atkSeleccionado;

    let rutaImg = "../../IMG/";// se agrega la ruta donde estan alojadas las imagenes
    let extensionImg = ".jpg";//se agrega la extension a la imagen seleccionada
    // Crear un elemento de imagen para la celda de imagen
    var imagen = document.createElement("img");
    let imagenPokemon = rutaImg + pokemonSeleccionado + extensionImg;// se otorga la ruta de la imagen + pokemon seleccionado de pokeadd + extension 
    
    imagen.src = imagenPokemon;     
    imagen.width = 100; // Ancho de la imagen (se puede ajustar)

     // Agregar la imagen a la celda de imagen
     datoImagen.appendChild(imagen);

     // Agregar las celdas de datos a la fila de datos
     filaDatos.appendChild(datoTipo);
     filaDatos.appendChild(datoPokemon);
     filaDatos.appendChild(datoEvo);
     filaDatos.appendChild(datoAtk);
     filaDatos.appendChild(datoImagen); // Agregar la celda de imagen a la fila de datos

     // Agregar la fila de datos al cuerpo de la tabla
     cuerpoTabla.appendChild(filaDatos);
 
     // Agregar el encabezado y el cuerpo a la tabla
     tabla.appendChild(encabezado);
     tabla.appendChild(cuerpoTabla);
 
     // Agregar la tabla al contenedor en la página
     var tablaContainer = document.getElementById("tablaContainer");
 
     // Si ya existe una tabla en el contenedor, reemplazarla
     if (tablaContainer.firstChild) {
         tablaContainer.removeChild(tablaContainer.firstChild);
     }
 
     tablaContainer.appendChild(tabla);// se crea la tabla con los datos seleccionados 
   }
