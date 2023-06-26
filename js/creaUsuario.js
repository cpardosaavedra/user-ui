function regUser(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dni = document.getElementById("dni").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPass").value;

    if (isInputDataValid(name,lastName,dni,address, password,confirmPass)) {
        
        console.log("contraseña validada con exito!!");
        userCreate(name,lastName,dni,address, password,confirmPass);
    } else {
        
        console.log("contraseña validada con exito!!");
    }
}


function  isInputDataValid(Name,lastName,dni,address, password,confirmPass) {
    console.log("starting createUser input validation");

    var errorDiv = document.getElementById("error");
    var errorDetails = "";

        if (Name == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Usuario válido</p>";
        }
        if (lastName == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Apellido válido</p>";
        }
        if (dni == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un dni válido</p>";
        }
        if (address == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Dirección válido</p>";
        }
        if (password == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Password válido</p>";
        }
        if (confirmPass == "") {
            errorDetails += "<p style=\"color: red;\">Confirme password porfavor!</p>";
        }
        if (password != confirmPass) {
            errorDetails += "<p style=\"color: red;\">los password no concuerdan!</p>";
        }
    
    errorDiv.innerHTML = errorDetails;

    if (errorDetails == "") {
        //refiere a que no hay problema en la validación de la line 19 a las 25.
        return true;
    } else {
        // uno o mas valores es incorrecto.
        return false;
    }

    console.log("end createuser input validation");
}

function userCreate(name,lastName,dni,address,password,confirmPass) {

    var errorDiv = document.getElementById("error");
    //fetch a la api de login
    var createUserRequest = buildUserCreate(name,lastName,dni,address,password,confirmPass);

    //definiendo url del endpoint
    const url = 'http://localhost:8080/createUser';

    //aqui estámos haciendo el llamado
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(createUserRequest)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Respuesta:', responseData);

        errorDiv.innerHTML = "<p style=\"color: blue;\">" + JSON.stringify(responseData) + "</p>";
        // Aquí puedes realizar acciones con la respuesta JSON recibida
    })
    .catch(error => {
        console.log('Error al llamar al login:', error);
        errorDiv.innerHTML = "<p style=\"color: red;\">problemas al Crear Usuario, intente mas tarde</p>";
        // Aquí puedes manejar cualquier error ocurrido durante la solicitud
    });
}
function buildUserCreate(Name,lastName,dni,address,password,confirmPass){
    let uCreateRequest = new Object();

    uCreateRequest.Name = Name;
    uCreateRequest.lastName = lastName;
    uCreateRequest.dni = dni;
    uCreateRequest.address = address;
    uCreateRequest.password = password;
    uCreateRequest.confirmPass = confirmPass;


    return uCreateRequest;
}