

 var teclas = {
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39
 };
 //una variable tipo objeto es una sola linea de codigo , es una variable que contiene variables
 //como es solo una linea de codigo no ponemos como al ultimo objeto proque causa
 //error de sintaxis
 document.addEventListener("keyup",dibujarTeclado);
 var cuadrito = document.getElementById("area_de_dibujo"); // asiganmos el canvas a la variable cuadradito
 var papel = cuadrito.getContext("2d"); //area donde se dibuja el canvas
 var x = 150;
 var y = 150;

 dibujarLinea("blue",149,149,151,151)
 dibujarLinea("red",75,75,77 ,77)
 dibujarLinea("green",230,75,232,77)

 function  dibujarLinea(color,x_inicial,y_inicial,x_final,y_final,) {
  papel.beginPath(); //incializa
  papel.strokeStyle = color;
  papel.lineWidth = 3;
  papel.moveTo(x_inicial, y_inicial);
  papel.lineTo(x_final, y_final);
  papel.stroke();
  papel.closePath(); // finaliza
}

function dibujarTeclado( evento )
{
  var movimiento = 10;
  var colorcito = "blue";

  //loops e iteracion son repeticiones de una tarea asignada.
  //un bucle(loops) nos ayuda a hacer el codigo menos mecanico porque
  // nos ayudan a repetir acciones las veces que sean necesarias.
  // tenemos bucles foor , while , to while
  switch(evento.keyCode) {

    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y - movimiento);
      y = y - movimiento;
    break
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y + movimiento);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x - movimiento, y);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x + movimiento, y);
      x = x + movimiento;
    break;
    default:
      console.log("otra tecla")
  }
}
