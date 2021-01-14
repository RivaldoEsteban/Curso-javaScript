class billete {
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = [];
var entregado = [];
caja.push(new billete(50,10))
caja.push(new billete(20,22))
caja.push(new billete(10,12))
var dinero ;

var div = 0;
var papeles = 0;
var r  = document.getElementById("resultado")

var b = document.getElementById("extraer")
b.addEventListener("click", entregarDinero)

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja )
  {
    if(dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad) {
        papeles = bi.cantidad
      } else {
        papeles = div;
      }
      entregado.push (new billete(bi.valor, papeles));
      dinero = dinero -(bi.valor * papeles);
    }
  }
  if(dinero > 0){
    r.innerHTML = "no tengo dinero";
  } else {
    for(e of entregado){
      if(e.cantidad > 0){
        r.innerHTML = r.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br />"
      }
    }
  }

}


