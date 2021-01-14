
// var rfeg = document.getElementById('villa-rfeg');
// var lienzo = rfeg.getContext('2d');
// document.addEventListener("keydown",moverToro);
// var xtoro = 150;
// var ytoro = 150;


// var fondo = {
//   url:"tile.png",
//   cargaOK: false
// };
// var vaca = {
//   url:"vaca.png",
//   cargaOK: false
// };
// var pollo = {
//   url:"pollo.png",
//   cargaOK: false
// };
// var cerdo = {
//   url:"cerdo.png",
//   cargaOK: false
// };
// var toro = {
//   url:"toro.png",
//   cargaOK: false
// }
// fondo.imagen = new Image();
// fondo.imagen.src = fondo.url;
// fondo.imagen.addEventListener("load", cargarFondo);
// //
// vaca.imagen = new Image();
// vaca.imagen.src = vaca.url;
// vaca.imagen.addEventListener("load", cargarVaca);

// pollo.imagen = new Image();
// pollo.imagen.src = pollo.url;
// pollo.imagen.addEventListener("load", cargarPollo);

// cerdo.imagen = new Image();
// cerdo.imagen.src = cerdo.url;
// cerdo.imagen.addEventListener("load", cargarCerdo);

// toro.imagen = new Image();
// toro.imagen.src = toro.url;
// toro.imagen.addEventListener("load", cargarToro);
// //
// function moverToro(evento){
//   var movimiento = 50;
//   var teclas = {
//      UP: 38,
//      DOWN: 40,
//      LEFT: 37,
//      RIGHT: 39
//    };
//    switch (evento.keycode) {
//     case teclas.UP:
//       if(ytoro > 0){
//         ytoro = ytoro - movimiento;
//         dibujar();
//       }
//     break;
//     case teclas.DOWN:
//       if(ytoro < 450){
//         ytoro = ytoro + movimiento;
//         dibujar();
//       }
//     break;
//     case teclas.LEFT:
//       if(xtoro > 0){
//         xtoro = xtoro - movimiento;
//         dibujar();
//       }
//     break;
//     case teclas.RIGHT:
//       if(xtoro < 450){
//         xtoro = xtoro + movimiento;
//         dibujar();
//       }
//     break;
//    }
// }

// function cargarFondo ()
// {
//   fondo.cargaOK = true;
//   dibujar();
// }
// function cargarVaca ()
// {
//   vaca.cargaOK = true;
//   dibujar();
// }
// function cargarPollo ()
// {
//   pollo.cargaOK = true;
//   dibujar();
// }
// function cargarCerdo ()
// {
//   cerdo.cargaOK = true;
//   dibujar();
// }
// function cargarToro ()
// {
//   toro.cargaOK = true;
//   dibujar();
// }



// function dibujar ()
// {
//   if(fondo.cargaOK)
//   {
//     lienzo.drawImage(fondo.imagen,0,0);
//   }
//   if(vaca.cargaOK)
//   {
//     for(v=0; v<10 ;v++)
//     {
//       var x = aleatorio(0,420)
//       var y = aleatorio(0,420)
//       lienzo.drawImage(vaca.imagen,x,y);
//     }
//   }
//    if(pollo.cargaOK)
//   {
//     for(v=0; v<15 ;v++)
//     {
//       var x = aleatorio(0,420)
//       var y = aleatorio(0,420)
//       lienzo.drawImage(pollo.imagen,x,y);
//     }
//   }
//    if(cerdo.cargaOK)
//   {
//     for(v=0; v<5 ;v++)
//     {
//       var x = aleatorio(0,420)
//       var y = aleatorio(0,420)
//       lienzo.drawImage(cerdo.imagen,x,y);
//     }
//   }
//    if(toro.cargaOK)
//   {


//     lienzo.drawImage(toro.imagen,xtoro,ytoro);

//   }

// }



// function aleatorio (min, maxi)
// {
//   var resultado = Math.floor(Math.random()* (maxi-min + 1)) + min;
//   return resultado ;
// }

var vp = document.getElementById('villa-rfeg');
var papel = vp.getContext("2d");
var xLobo = 0;
var yLobo = 0;
document.addEventListener("keydown", moverLobo);

var lobo = {
  url:"lobo.png",
  cargaOK: false
};

var fondo = {
  url:"tile.png",
  cargaOK: false
}

var vaca = {
  url:"vaca.png",
  cargaOK: false
};
var xVaca = new Array();
var yVaca = new Array();

var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var xPollo = new Array();
var yPollo = new Array();

var cerdo = {
  url:"cerdo.png",
  cargaOK: false
};
var xCerdo = new Array();
var yCerdo = new Array();

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

var cantidad_vacas = aleatorio(0, 20);
var cantidad_pollos = aleatorio(0, 30);
var cantidad_cerdos = aleatorio(0, 10);
console.log("Cantidad de Vacas: " + cantidad_vacas);
console.log("Cantidad de Pollos: " + cantidad_pollos);
console.log("Cantidad de Cerdos: " + cantidad_cerdos);

function moverLobo(evento) {
  var movimiento = 100;
  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

  switch (evento.keyCode) {
    case teclas.UP:
      if (yLobo > 0) {
        yLobo = yLobo - movimiento;
        dibujar();
      }
    break;
    case teclas.DOWN:
      if (yLobo < 450) {
        yLobo = yLobo + movimiento;
        dibujar();
      }
    break;
    case teclas.LEFT:
      if (xLobo > 0) {
        xLobo = xLobo - movimiento;
        dibujar();
      }
    break;
    case teclas.RIGHT:
      if(xLobo < 450) {
        xLobo = xLobo + movimiento;
        dibujar();
      }
    break;
    default:
      console.log("Otra tecla : " + evento.key);
    break;
  }
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca() {
  vaca.cargaOK = true;
  mantenerPosicion();
}
function cargarPollo() {
  pollo.cargaOK = true;
  mantenerPosicion();
}
function cargarCerdo() {
  cerdo.cargaOK = true;
  mantenerPosicion();
}
function cargarLobo() {
  lobo.cargaOK = true;
  dibujar();
}

function mantenerPosicion() {
  if (vaca.cargaOK) {
    for (var i = 0; i < cantidad_vacas; i++) {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      var x = x * 70;
      var y = y * 70;
      xVaca[i] = x;
      yVaca[i] = y;
    }
  }
  if (pollo.cargaOK) {
    for (var i = 0; i < cantidad_pollos; i++) {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 70;
      var y = y * 70;
      xPollo[i] = x;
      yPollo[i] = y;
    }
  }
  if (cerdo.cargaOK) {
    for (var i = 0; i < cantidad_cerdos; i++) {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 70;
      var y = y * 70;
      xCerdo[i] = x;
      yCerdo[i] = y;
    }
  }
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    for (var i = 0; i < cantidad_vacas; i++) {
      papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
    }
  }
  if (pollo.cargaOK) {
    for (var i = 0; i < cantidad_pollos; i++) {
      papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
    }
  }
  if (cerdo.cargaOK) {
    for (var i = 0; i < cantidad_cerdos; i++) {
      papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
    }
  }
  if (lobo.cargaOK) {
    papel.drawImage(lobo.imagen, xLobo, yLobo);
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}