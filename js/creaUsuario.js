var errorDiv = document.getElementById("error");

function regUser(){
    try {
        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let dni = document.getElementById("dni").value;
        let address = document.getElementById("address").value;
        let nick = document.getElementById("nick").value;
        let password = document.getElementById("password").value;
        let confirmPass = document.getElementById("confirmPass").value;

        if (isInputDataValid(name,lastName,email,dni,address,nick, password,confirmPass)) {
            
            console.log("contraseña validada con exito!!");
            userCreate(name,lastName,email,dni,address,nick,password,confirmPass);
            document.getElementById("error").innerHTML = "<p style=\"color: blue;\">usuario creado correctamente!!</p>";
        } else {
            
            console.log("contraseña validada con exito!!");
        }
    } catch (e) {
        document.getElementById("error").innerHTML = "<p style=\"color: red;\">problemas al Crear Usuario, intente mas tarde</p>";
    }
}


function  isInputDataValid(name,lastName,email,dni,address,nick,password,confirmPass) {
    console.log("starting createUser input validation");

    var errorDetails = "";

        if (name == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Usuario válido</p>";
        }
        if (lastName == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Apellido válido</p>";
        }
        if (email == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Apellido válido</p>";
        }
        if (dni == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un dni válido</p>";
        }
        if (address == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un Dirección válido</p>";
        }
        if (nick == "") {
            errorDetails += "<p style=\"color: red;\">ingrese un nickName válido</p>";
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
    
    document.getElementById("error").innerHTML = errorDetails;

    if (errorDetails == "") {
        //refiere a que no hay problema en la validación de la line 19 a las 25.
        return true;
    } else {
        // uno o mas valores es incorrecto.
        return false;
    }
}

function userCreate(name,lastName,email,dni,address,nick,password,confirmPass) {
    //fetch a la api de login
    var createUserRequest = buildUserCreate(name,lastName,email,dni,address,nick,password,confirmPass);

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
    .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
    .then(responseData => {
        console.log('Respuesta:', JSON.stringify(responseData));
        // Aquí puedes realizar acciones con la respuesta JSON recibida
    })
    .catch(error => {
        console.log('Error al llamar al login:', error);

        throw new Error('Error en la solicitud');
        // Aquí puedes manejar cualquier error ocurrido durante la solicitud
    });
}
function buildUserCreate(name,lastName,email,dni,address,nick,password,confirmPass){
    let uCreateRequest = new Object();

    uCreateRequest.name = name;
    uCreateRequest.lastName = lastName;
    uCreateRequest.email = email;
    uCreateRequest.dni = dni;
    uCreateRequest.address = address;
    uCreateRequest.nick = nick;
    uCreateRequest.password = password;
    uCreateRequest.confirmPass = confirmPass;


    return uCreateRequest;
}