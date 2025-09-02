/*

-- ENCAPSULAMIENTO --

Significa ocultar los detalles internos de un objeto
y exponer solo lo necesario.
En JavaScript se logra con propiedades privadas(#) y
metodos publicos

*/

class Persona {
    /*
    Persona {
        nombre : "",
        edad : ""
    }
    */

    // Atributos
    #nombre; // Propiedad Privada
    #edad; // Propiedad Privada

    // Constructor Compuesto
    constructor (usuario, edad) {
        this.usuario = usuario;
        this.#edad = edad;
    }

    /* 
    Persona {
        nombre : "Gustavo",
        edad : "16"
    }
    */

    // Constructor Vacio
    constructor ( ) {

    }

    getNombre ( ) {
        return this.#nombre;
    }

    setNombre (nombre) {
        this.nombre = nombre;
    }
}