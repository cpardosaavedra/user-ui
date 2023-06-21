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
    //fetch a la api de login
    var loginRequest = buildLoginRequest(userName, password);

    console.log(loginRequest);
}

function buildLoginRequest(userName, password){
    let loginRequest = new Object();

    loginRequest.userName = userName;
    loginRequest.password = password;

    return loginRequest;
}


