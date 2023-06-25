function doLogin() {
    let userName = document.getElementById("userNameId").value;
    let password = document.getElementById("passwordId").value;

    if (isInputDataValid(userName, password)) {
        alert("es valid");
        continueLogin(userName, password);
    } else {
        alert("no es válido");
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

    console.log("end login input validation")

}

function continueLogin(userName, password) {

    var errorDiv = document.getElementById("error");
    //fetch a la api de login
    var loginRequest = buildLoginRequest(userName, password);

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
    .then(response => response.json())
    .then(responseData => {
        console.log('Respuesta:', responseData);

        errorDiv.innerHTML = "<p style=\"color: blue;\">" + JSON.stringify(responseData) + "</p>";
        // Aquí puedes realizar acciones con la respuesta JSON recibida
    })
    .catch(error => {
        console.log('Error al llamar al login:', error);
        errorDiv.innerHTML = "<p style=\"color: red;\">problemas al inciar sesión, intente mas tarde</p>";
        // Aquí puedes manejar cualquier error ocurrido durante la solicitud
    });
}

function buildLoginRequest(userName, password){
    let loginRequest = new Object();

    loginRequest.userName = userName;
    loginRequest.password = password;

    return loginRequest;
}


