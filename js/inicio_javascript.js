/*  INICIO DE JAVASCRIPT, EJEMPLOS BÁSICOS */

    // Ejemplos de comentarios : 

/*

-> Comentarios de mas de una línea 

*/

// -> Comentario de una línea

// OPERADORES ARITMÉTICOS ->

    /*
        % -> Calcula el resto de una división.

        ++ -> Operador incremental:
            5++ = 5 -> si lo ponemos despues del número nos devuelve el numero antes de sumarle 1.
            ++5 = 6 -> si lo ponemos antes del número nos devuelve el numero +1.

        -- -> Operador decremental: se utuliza igual que el incremental.

        - -> Convierte un numero en negativo 

        + -> Convierte un numero a positivo.

        ** -> Sirve para elevar un numero con un exponente Ejemplo: 4**2.
    */

// OPERADORES DE COMPARACIÓN ->

    /* 
        == -> Operador de igualdad, compara dos variables sin tener en cuenta el tipo del valor y devuelve true o false.
        != -> Devuelve true si los dos operadores son diferentes.
        === -> Devuelve true si los dos operadores son idénticos en valor y tipo de dato.
        > -> Mayor que...
        < -> Menor que ...
        >= -> Mayor o igual que...
        <= -> Menor o igual que...

    */

// TIPOS DE DATOS ->

    // Valor de tipo texto:
    var texto = 'Hola Mundo';

    // Valor de tipo numérico:
    var number = 36;

    // Valor booleano:
    var boleano = true;
        // Tambien puede ser:
    var booleano = false;

    // Valores de tipo objeto:
        // Array:
    var lista = [42,69,78,12,3,45];
        // Objetos:
    var persona = {	
        nombre: 'Fran',
        edad: 21,
        ciudad: 'Palma de Mallorca',
        estudiante : true
    }

// CARACTERES ESPECIALES ->

    /*
        \b -> Retroceso
        \f -> Avance de página
        \n -> Nueva línea
        \r -> Retorno de línea
        \t -> Tabulación
        \v -> Tabulación vertical
        \' -> Apostrofe o comilla sencilla
        \" -> Comillas dobles
        \\ -> Barra invertida
    */
    
// FUNCIONES -> Tienen la palabra reservada 'function', hay dos tipos:

    // Declarativas:
    function saludo() {
        return console.log('Bienvenido');
    }

    // Expresivas:
    var funcionSaludo = function() {
        return console.log('Hola Mundo');
    }

    /* 
        La diferencia es que las expresivas las podemos llamar antes de ser declaradas y declararlas despues,
        en canvio con las declarativas aplicamos el HOISTING, que es básicamente que no puedes llamar a una
        función o variable antes de declararla.
    */

    // Cómo llamamos a una función? -> Siplemente poniendo el nombre de la función que queremos llamar y sus parentesis.
    saludo();

    // Parametros en las funciones ->
    function suma(num1, num2){
        return console.log(`La suma de ${num1} y ${num2} es ${ num1 + num2}`);
    }


// Coerción en Javascript ->

    // La coerción és basicamente es forzar un valor como si fuera otro tipo de valor. Hay dos tipos:

        // Coerción IMPLICITA -> Se genera automaticamente por el compilador.

        var ejemplo1 = 20 + "20"; // El resultado es un string "2020", el compilador transforma automaticamente el numero 20 aun strig y lo concatena con el segundo string.

        var ejemplo2 = 20 * "20"; // En este caso el resultado es 400 ya que el signo * no concatena, así que transforma el string "20" a un número entero.

        // Coerción EXPLICITA -> La generamos nosotros cuando queremos forzar a cambiar el tipo de dato. Para eso JS nos brinda funciones propias del lenguaje:

        var explicito1 = 20 + Number("20"); // En este caso el resultado es 40 ya que nosotros estamos forzando que el string "20" se convierta a un numero entero.

        var explicito2 = String(20) + "20" // En este caso forzamos un numero entero a ser un string, por lo tanto el signo + concatena los dos strings, y el resultado sería "2020".

// EL SCOPE DE LAS VARIABLES ->

    // Podemos declarar variables GLOBALES, que se declaran al inicio de nuestro código y estan disponibles en todo el código, tanto en el mismo archivo como si las llamamos desde otros archivos.
    // En canvio las variables LOCALES se declaran dentro de una funcion o clase y en este caso solo las podemos llamar desde dentro de esas funciones o clases.
    // EJEMPLO -> 

        var anyoActual = 2020;

        function calculoEdad(anyo_nacimiento){
            var edad = anyoActual - anyo_nacimiento;
            console.log(`El usuario tiene ${edad} años.`);
        }

    /*
        La variable "anyoActual" está en un SCOPE GLOBAL por lo tanto podemos llamar a esta variable dentro de la funcion, en cambio la variable "anyo_nacimiento" está declarada dentro de la función,
        así que no la podemos llamar desde fuera de la funcion.
    */ 


