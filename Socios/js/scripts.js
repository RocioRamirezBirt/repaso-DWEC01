'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// TODO: array para añadir los socios
var arraySocios = [];



cargarSociosJSON()
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
async function cargarSociosJSON(){
  let path = 'model/datosSocios.json'
  
  let request = new Request(path,{
    headers: new Headers({'Content-Type':'text/json'}),
    method: 'GET'
  })

  fetch(request).then(response =>{
    response.json().then(async data => {
      console.log('Datos',data)
       aniadirSociosInicialesArray(data)
    })
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
 function aniadirSociosInicialesArray (datos) {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
    
    // // convertirlo con json
      let jsonData = `[
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
    console.log(typeof(jsonData));
    let jsonParseado = JSON.parse(jsonData);

    let i 
    for(i= 0; i < jsonParseado.length; i++){
      arraySocios.push(jsonParseado[i]);
    }
    //borrar
    console.log('array',arraySocios)
    }
/*
    TODO: Meotodo para capturar los datos del socio introducidor en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  let nombre = formulario.querySelector('#fnombre').value;
  let apellido = formulario.querySelector('#fapellido').value;
  
  // TODO: crear el socio y añadirlo al array
  crearSocio(nombre,apellido)



}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  let id = crearID()
  
  // TODO: crear objeto socio
  const nuevoSocio = {
    id : crearID(),
    nombre : nombre,
    apellido : apellido
  }
  
  // TODO: añadir el objeto al array
  arraySocios.push(nuevoSocio)
  console.log('nuevoarray',arraySocios)
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  
  let ultimoId = arraySocios.length
  return ultimoId + 1

}


// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  contenedorEscribirSocios.innerHTML=''
  //TODO: bucle para recorrer y pintar el array de socios
  for(let i = 0; i < arraySocios.length; i++){
    let socioActual = arraySocios[i]

      //TODO: debemos añadir los socios a la pagina web
    const nuevoElemento = document.createElement('div')

    nuevoElemento.textContent=`Socio nº ${socioActual.id} ${socioActual.nombre} ${socioActual.apellido}`
    contenedorEscribirSocios.appendChild(nuevoElemento)
  }

}


// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa

console.log('Acaba el programa')
