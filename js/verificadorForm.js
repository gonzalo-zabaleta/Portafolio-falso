export function validar(input){

    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){

        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
        input.parentElement.querySelector(".mensaje-error").style.display = "none";
    } else {

        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
        input.parentElement.querySelector(".mensaje-error").style.display = "block";
    }
}

const tipoDeError = [

    "valueMissing",
    "typeMismatch",
]
const mensajeError = {

    nombre: {

        valueMissing: "Por favor, ingrese su nombre y apellido."
    },
    email: {

        valueMissing: "Por favor, ingrese su email.",
        typeMismatch: "El correo ingresado no es válido."
    },
    asunto: {

        valueMissing: "Por favor, ingrese un asunto."
    },
    mensaje: {

        valueMissing: "Por favor, escriba un mensaje."
    },
}

function mostrarMensajeError(tipoDeInput, input){

    let mensaje = "";
    tipoDeError.forEach(error => {
        
        if(input.validity[error]){

            mensaje = mensajeError[tipoDeInput][error];
        }
    });

    return mensaje;
}