'use strict'

//*************************VARIABLES GLOBALES */

let json = `[   
    {
       "id":1,
       "nombre" : "Iker",
       "apellido" : "Arana",
       "usuario":"iarana",
       "contraseña":"1234Abcd"
    },
    {
       "id":2,
       "nombre" : "Andoni",
       "apellido" : "Larrieta",
       "usuario":"alarrieta",
       "contraseña":"5678Efgh"
    },
 
    {
       "id":3,
       "nombre" : "Jokin",
       "apellido" : "Olano",
       "usuario":"jolano",
       "contraseña":"9012Ijkl"
    }
 ]`
 var jsonData;
 console.log(typeof(json))


 //*************************** */ FUNCIONES *********************************/
 
 function inicio(){
    jsonData = JSON.parse(json);
    console.log(typeofjsonData)
 }







//****************************************MAIN*************************************** */


 //************************cargar JQuery **************************/
$(document).ready(function(){
    inicio()


});