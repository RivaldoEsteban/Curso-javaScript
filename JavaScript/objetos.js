"los obejetos se manejan con propiedad , propiedas son palabras claves y valores"

var auto = {
  marca: "mazda",
  modelo: "rx",
  annio: 2020,
  detalles: function(){
    console.log(`auto ${this.modelo} ${this.annio}`);
  }
};
function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// this hace referencia al objeto , this = auto
var nuevoAuto = new auto("testa","3",2021)


var articulos = [
  {nombre: "bici", costo: 200},
  {nombre: "celular", costo: 2000},
  {nombre: "tv", costo: 5000},
  {nombre: "reloj", costo: 300},
  {nombre: "audifono", costo: 100},
  {nombre: "zapatillas", costo: 280},
];
//primer metodo .filter -filtra elementos, los trae en un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <=1000
});
//.map nos ayuda a mapear y trae lo que solicitemos , creando un nuevo array
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});
// .find nos crea un nuevo array si encuentra la palabra clave que solicitamos, nos trae la info
var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "tv"
});
// .forEach no crea un nuevo array
articulos.forEach(function(articulo){
  console.log(articulo.nombre)
});
// .some genera un nuevo array , solo nos trae si la condicion se cumple o no , true o false
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 1000 ;
});