 'use strict'

 console.log('empezar el programa');

 //--------------------VARIABLES GLOBALES-------------------
 const formulario = document.querySelector('#formNombre')
 const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios')

 // TODO: array para añadir los socios
let arraySocios = [];

// cargarJSON


// ------------------- FUNCIONES ------------------------

/**
 * EJERCICIO 1
 * El ejercicio hace referencia a la parte de la página web donde se añadirán los socios. Un socio tendrá los siguientes 3 campos asociados:

    ID o número de socio

    Nombre

    Apellido

Deberéis realizar lo siguiente:

    Crear un fichero de "datosSocios" en formato JSON con varios socios y ubicarlo correctamente en la arquitectura

    Cargar fichero socios cuando se abra la página web leyendo el fichero JSON

    Guardar los socios en una estructura de datos que conozcáis

 */


//----------------FUNCION LEER DEL JSON------------------------/

function cargarSociosJSON(){
    let path = '../app/model/datosSocios.json'

    let request = new Request(path,{
        headers: new Headers({'Content-Type' : 'text/json'}),
        method: 'GET'
    })

    fetch(request).then(response =>{
        response.json().then(data =>{
            console.log('datos',data)
            aniadirSociosInicialesArray()
        })
    })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/

function aniadirSociosInicialesArray(){

    // json
    let json = `[
        {
            "id":1,
            "nombre": "Andoni",
            "apellido": "Larrieta"
        },
    
        {
            "id":2,
            "nombre": "Jon",
            "apellido": "Agirre"
        },
    
        {
            "id":3,
            "nombre": "Patxi",
            "apellido": "Mujika"
        }
    
    ]`
    
    let JsonParseado = JSON.parse(json)

    for(const socio of JsonParseado){
        arraySocios.push(socio)
    }
    
    /* BORRAR*/ 
    console.log('arraylleno',arraySocios)

}

/**
 * 
    EJERCICIO 2
    Al pulsar el botón “Añadir”, el programa debe hacer lo siguiente:

        Recoger los campos “Nombre” y “Apellido” de las cajas de texto

        Asignarle el último ID disponible

 */


/*
        TODO: Método para capturar los datos del socio introducirlos en el formulario
*/

function capturarDatosSocio(){

      // TODO: recoger los el nombre y apellido del HTML
     let nombre = formulario.querySelector('#nombre').value

     let apellido = formulario.querySelector('#apellido').value

        // BORRAR
        console.log('nombre',nombre)
        console.log('apellido',apellido)

    // TODO: crear el socio y añadirlo al array

    crearSocio(nombre,apellido);
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */

function crearSocio(nombre,apellido){

    // TODO: añadir el objeto al array
    const nuevoSocio = { 
        id: crearID(),
        nombre: nombre,
        apellido: apellido 
    }

     // TODO: añadir el objeto al array
     arraySocios.push(nuevoSocio)

     //borrar
     console.log('arrayfinal',arraySocios)

}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID(){
    let id = arraySocios.length
    //borrar
    console.log(id)

    return id+1
}



/**
 * EJERCICIO 3
 * 
 * Este ejercicio hace referencia a la parte de la página web donde se     muestran los socios. Para ello:

     Al pulsar el botón “Pintar Lista Socios”, se deben pintar en la interfaz todos los socios que existen en el array de socios

      Si añadimos un nuevo socio al array de socios a través del ejercicio 1 y volvemos a pulsar el botón “Pintar Lista Socios”, se deberá eliminar de la interfaz la lista pintada anteriormente, y pintar la nueva lista

 */

    function pintarListaSocios(){

        contenedorEscribirSocios.innerHTML=''

          //TODO: bucle para recorrer y pintar el array de socios
        for(let i = 0; i < arraySocios.length; i++) {
            let socioActual = arraySocios[i]

            let elemento = document.createElement('div')
            elemento.textContent=`socio nº ${socioActual.id} ${socioActual.nombre} ${socioActual.apellido}`

            contenedorEscribirSocios.append(elemento)
        }
    
    
    }



    //Para acceder al value de la opción actualmente seleccionada en un campo select con id="provincias" haremos:

     let prov = document.getElementById('provincias').options[document.getElementById('provincias').selectedIndex=1].value

    

    console.log(prov)






















// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa

cargarSociosJSON()
console.log('Acaba el programa')



