let base = document.getElementById('base')

function hola() {
	var a = document.createElement('DIV')
	base.innerHTML = "hola"
	base.appendChild(a)
}hola()

  // function getInfo(response) {
  //          let getAPI = {
  //               "async"         : true,
  //               "url"           : "characters.csv/",
  //               "method"        : "GET",
  //               success: function(response) {processData(response);}
  //               }
  //               // console.log(getAPI.url)
  //           $.ajax(getAPI).done(function (response) {
  //                  		console.log(response)
  //               	})
  //       }getInfo()

function getInfo() {
let settings = {
  "async"     : true,
  // "crossDomain" : true,
  "url"     : "characters.csv",
  "method"    : "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response)
  })
}getInfo()




/*
1) Crea un archivo de texto CSV con par de líneas. 
En un HTML+JS, llamada ese archivo vía AJAX y 
ponlo en una tabla tomando los nombres de las columnas 
y las filas según los archivos.

2) Con el anterior listo. 
Pon un textbox que permita una cantidad de segundos, 
ese tiempo lo vas a usar para refrescar el contenido 
de la tabla y si modificas el CSV, afecta el contenido 
de la tabla.

3) Luego de estar actualizando la tabla en base a X 
valor indicado por el usuario. Vas a seguir verificando 
PERO vas a detectar si hay cambios / diferencias en el archivo. 
Si las hay, vas a notificar al usuario que hay cambios y 
que si los quiere aplicar. Vas a aplicar dependiendo del Sí/No. 
Vas a agregar una sección tipo histórico en donde vas a colocar 
la hora y una descripción sobre los cambios aplicados. 

4) Cada vez que se actualice la tabla, vas a agregar una entrada 
al histórico ya creado. Al dar click a una entrada, vas a colocar 
en la tabla ESA versión de la tabla, es decir, cada entrada 
representa una versión n de la tabla y al ser seleccionada vas 
a poner los datos que corresponden a esa versión. Así se podrá 
navegar entre versiones.

5) Aplicar bootswatch y un manejador de notificaciones para indicar: 
errores, 
mensajes de confirmación, 
informaciones, 
etc.

Más que recomendaciones, lo que vas a necesitar:
- AJAX / XHR
- manipulación de elementos HTML vía DOM (crear, anidar, buscar)
- un mecanismo de seguimiento / intervalos

*/