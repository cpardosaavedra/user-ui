function doLogin() {

    
    document.getElementById('loading-container').style.display = 'block';
    document.getElementById('loading-icon').style.display = 'block';

    let userName = document.getElementById("userNameId").value;
    let password = document.getElementById("passwordId").value;

    if (isInputDataValid(userName, password)) {
        continueLogin(userName, password);
    } else {
        alert("no es válido");
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('loading-icon').style.display = 'none';
    }
}

function isInputDataValid(userName, password) {
    console.log("starting login input validation");

    var errorDiv = document.getElementById("error");
    var errorDetails = "";

    if (userName == "") {
        errorDetails += "<p style=\"color: red;\">ingrese un usuario válido</p>";
    }

    if (password == "") {
        errorDetails +="<br/><p style=\"color: red;\">ingrese un password válido</p>";
    }

    errorDiv.innerHTML = errorDetails;

    if (errorDetails == "") {
        //refiere a que no hay problema en la validación de la line 19 a las 25.
        return true;
    } else {
        // uno o mas valores es incorrecto.
        return false;
    }

    console.log("end login input validation");
}

function continueLogin(userName, password) {

    var errorDiv = document.getElementById("error");
    //fetch a la api de login
    var loginRequest = buildLoginRequest(userName, password);
    var statusCode;

    //definiendo url del endpoint
    const url = 'http://localhost:8080/login';

    //aqui estámos haciendo el llamado
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginRequest)
    })
    .then(response => {
        statusCode = response.status;

        return response.json(); 
    })
    .then(responseData => {
        console.log('Respuesta:', responseData);

        errorDiv.innerHTML = "<p style=\"color: blue;\">" + JSON.stringify(responseData) + "</p>";

        if (statusCode == 200) {
            window.location.href = "home.html?token=" + responseData.token;
          // La solicitud se completó exitosamente
        } else {
          // La solicitud no fue exitosa
          console.log('Status code:', response.status + ", cause by: " + JSON.stringify(response.json()));
          errorDiv.innerHTML = "<p style=\"color: red;\">problemas al inciar sesión, usuario y/o contraseña no validas</p>";
          document.getElementById('loading-container').style.display = 'none';
          document.getElementById('loading-icon').style.display = 'none';
          // Realizar acciones en caso de error...
        }
    })
    .catch(error => {
        console.log('Error al llamar al login:', error);
        errorDiv.innerHTML = "<p style=\"color: red;\">problemas al inciar sesión, intente mas tarde</p>";
        // Aquí puedes manejar cualquier error ocurrido durante la solicitud
        document.getElementById('loading-icon').style.display = 'none';
        document.getElementById('loading-container').style.display = 'none';
    });
}

function buildLoginRequest(userName, password){
    let loginRequest = new Object();

    loginRequest.userName = userName;
    loginRequest.password = password;

    return loginRequest;
}


