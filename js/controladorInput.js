import { validar } from "./verificadorForm.js";

//Buscador para los inputs y aplicando su validación.
const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    
    input.addEventListener("blur", (input) => {

        validar(input.target);
    })
});


//Buscador para los textarea y aplicando su validación.
const textAreas = document.querySelectorAll("textarea");

textAreas.forEach( textArea => {
    
    textArea.addEventListener("blur", (textArea) => {

        validar(textArea.target);
    })
});