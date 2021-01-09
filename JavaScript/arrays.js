// estructura de datos que guarda valores, numeros , string , objetos
//sintaxis
  var frutas = ["platano" ,"uvas","fresa","mango"];
  var agregar = frutas.push("pera","sandia");
  var ultimo = frutas.pop("sandia");
  var nuevaFruta = fruta.unshift("mango")

 // como saber la cantidad de elementos de un arryl
 // console.log (frutas.lenght)
 // agregar elemento  .push , agregamos elementos al arrayl
 // push - agrega un elemnto en la ultima posicion en el array
 // pop- elimina el ultimo elemento de la lista del array
 // unshift - agrega un elemento en la primera posicion de la lista del array
 // shift - elimina el primer elemento de la lista del array

var estudiantes = ["juan","carlos","rivaldo","victor"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++){
        saludarEstudiantes(estudiantes [i]);
}
