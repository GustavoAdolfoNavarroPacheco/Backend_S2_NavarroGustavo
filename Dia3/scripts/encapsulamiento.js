/*
ENCAPSULAMIENTO

Significa ocultar los detalles internos de un objeto
y exponer solo lo necesario.
En JavaScript se logra con propiedades privadas(#) y metodos
publicos
*/

class Usuario {
    #password; // Propiedad Privada
    constructor (usuario, password) {
        this.usuario = usuario;
        this.#password = password;
    }
}