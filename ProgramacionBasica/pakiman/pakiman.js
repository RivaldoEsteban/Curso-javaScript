
var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";



class pakiman
{
  constructor(nombre,vida,dannio){
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida =  vida ;
    this.dannio = dannio;

    this.imagen.src = imagenes [this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar(){
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("vida: " + this.vida + "<br />");
    document.write("daño: " + this.dannio + "<hr />");
    document.write("</p>");

  }
}

var coleccion = [];
coleccion.push(new pakiman("cauchin",100,30));
coleccion.push(new pakiman ("pokacho",80,50));
coleccion.push(new pakiman("tocinauro",120,40));

// console.log(coleccion[2].nombre)
for( var pakin of coleccion ){ // in muetra el indice , off muestra el objeto
  console.log(pakin);
}
coleccion[0].mostrar();
coleccion[1].mostrar();
coleccion[2].mostrar();