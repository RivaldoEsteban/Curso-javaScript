// reglas de validacion para generar acciones

var edad = 18;

if (edad === 18){
    console.log ("puedes votar por primera vez");
} else if (edad >18) {
    console.log ("Puedes votar de nuevo")
} else {
    console.log ("eres menor de edad y no puedes votar");
}

condition ? true : false

var edad = 30;

var resultado = edad === 30 ? "si soy treinta" : " no soy treinta"

var  piedra = "piedra" ;
var papel = "papel";
var tijera = "tijera";

var resultado = function(user, cpu) {
  if(user != cpu){
    if(user === piedra && cpu === tijera)
        console.log("el user GANO con " + piedra)
  }else if (user === papel  && cpu === piedra) {
        console.log ("el user GANO con " + papel)
  }else if (user === tijera && cpu === papel){
        console.log ("el user GANO con " + tijera)
  }else if (user === cpu) {
    console.log ("empate")
  }else {
    console.log ("cpu gano")
  }
}
var  piedra = "piedra" ;
var papel = "papel";
var tijera = "tijera";

var resultado = function(user,cpu) {
  if(user != cpu){
  if(user === piedra && cpu === papel){
      console.log("User perdio y gano cpu con" + papel)
  }else if (user === papel && cpu === piedra){
      console.log ("User Gano con " + papel)
  }else {
      console.log ("elige una opcion")
  }
}