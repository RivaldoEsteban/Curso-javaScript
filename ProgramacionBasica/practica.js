

const culpable = window.prompt("Eres culpable ?");

if(culpable == "si"){
  console.log("Culpable, iras a la carcel!")
}else if(culpable == "no") {
  console.log("Inocente, puedes ir a casa ");
}else {
  console.log("la documentacion por favor");
}

var oreo = 1;
var chocolate = 1.5;
var gomitas = 0.5;
var precioHelado = 10;
var eleccionCliente = prompt("quieres topping con tu helado?", "si")

console.log(eleccionCliente)
if(eleccionCliente == "si"){
  var topping = prompt("que topping quieres? \n oreo \n chocolate \n gomitas")
  if(topping == 'oreo'){
    console.log("El precio de tu helado es " + (precioHelado + oreo));
  } else if (topping == "chocolate"){
    console.log("El precio de tu helado es " + (precioHelado + chocolate));
  } else if (topping == gomitas){
    console.log("El precio de tu helado es " + (precioHelado + gomitas));
  } else {
    console.log("Elige una opción correcta")
  }
} else {
  console.log("el precio de tu helado es " + precioHelado + " soles");
}