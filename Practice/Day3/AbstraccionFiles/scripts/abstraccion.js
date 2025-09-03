/*

-- ABSTRACCION --

Consiste en mostrar solo lo esencial y ocultar lo c-
omplejo. Se logra creando metodos que representen a-
de alto nivel, sin necesidad de que el usuario enti-
enda toda la logica interna.

*/

class Coche {
    encender( ) {
        console.log(`El coche esta encendido!`);      
    }
    apagar( ) {
        console.log(`El coche esta apagado!`);
    }
}

const miCoche = new Coche( );

miCoche.encender( );
miCoche.apagar( );