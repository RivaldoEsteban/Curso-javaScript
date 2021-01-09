//para validacion pero sirve por casos
var number = 1;

switch (number) {
  case 1:
      console.log("soy el caso uno");
      break;
  case 10:
      console.log("soy el caso diez")
      break
  default :
      console.log("no soy nada")
}

var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";

var p1;
var IA;

function juego(p1,IA){
  switch (p1,IA) {
    case p1 === tijera && IA === papel :
      console.log("p1 ganó")
      break;
    case p1 === tijera && IA === piedra :
      console.log("p1 perdió")
      break
  }
}