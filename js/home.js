document.addEventListener('DOMContentLoaded', function() {

  var urlParams = new URLSearchParams(window.location.search);

  let token = urlParams.get("token");

fetch('http://localhost:8080/getUserData', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'session-token': token
  }
})
  .then(response => response.json())
  .then(data => {
        // Obtener referencia a la tabla

    document.getElementById("nombre").value = data.name;
   console.log(data)
    const table = document.getElementById('data-table');

    // Limpiar el contenido existente en el cuerpo de la tabla
    table.getElementsByTagName('tbody')[0].innerHTML = '';

    // Iterar sobre los datos recibidos
    data.forEach(user => {
      // Crear una nueva fila en la tabla
      const newRow = table.insertRow();
    

      // Insertar celdas en la fila con los datos correspondientes
      newRow.insertCell().textContent = user.nombre;
      newRow.insertCell().textContent = user.apellido;
      newRow.insertCell().textContent = user.email;
      newRow.insertCell().textContent = user.rut;
      newRow.insertCell().textContent = user.direccion;
      newRow.insertCell().textContent = user.nickname;
    });
  })
  .catch(error => {
    // Manejar errores
    console.error('Error:', error);
    console.log("¡No estás conectado al endpoint!");
  });
});