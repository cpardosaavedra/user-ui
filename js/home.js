document.addEventListener('DOMContentLoaded', function () {

  var urlParams = new URLSearchParams(window.location.search);

  let token = urlParams.get("token");

  fetch('http://localhost:8080/getUserData', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'session-token': token
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .then(responseBody => {
        console.log(responseBody);
      
        //manipular datos del response body y llenar el formulario del html
        //recuerda que no es necesario ocupar for para esto
    })
    .catch(error => {
      // Manejar errores
      console.log(error);

      if (error.message == 400) {
        document.getElementById("error-message").innerHTML = "¡Sesión expirada! Por favor, vuelve a iniciar sesión.";
      } else {
        document.getElementById("error-message").innerHTML = "Error en la applicación, vuelve a iniciar sesión.";
      }

      showSessionExpiredPopUp();
    });
});

function showSessionExpiredPopUp() {
  document.getElementById("session-expired-overlay").style.display = "flex";
  document.getElementById("session-expired-message").style.display = "flex";
}