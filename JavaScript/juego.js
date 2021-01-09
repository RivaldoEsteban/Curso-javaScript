

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const win = "GANASTE";
const lose = "PERDISTE";
const TIE = "EMPATE";

function game(p1,IA){
  console.time('game')
  if(p1 === IA){
    console.log(TIE);
    console.timeEnd('game')

  } else if (p1 === papel){
    if(IA === tijera){
      console.log(lose);
      console.timeEnd('game')

    }else {
      console.log(win)
      console.timeEnd('game')

    }
  } else if(p1 === tijera){
    if(IA === piedra){
      console.log(lose);
      console.timeEnd('game')

    }else{
      console.log(win);
      console.timeEnd('game')

    }
  } else if(IA === papel){
    console.log(lose);
    console.timeEnd('game')

  } else {
    console.log(win)
    console.timeEnd('game')

  }
}
console.log('deberia perder')
game(tijera,piedra)


function game2(p1,IA){
  console.time('game2')
  if(p1 === IA){
    console.log(TIE);
    console.timeEnd('game2')

  } else if (p1 === papel && IA === tijera){
    console.log(lose);
    console.timeEnd('game2')

  } else if (p1 === tijera && IA === piedra) {
    console.log(lose);
    console.timeEnd('game2')

  } else if(p1 === piedra && IA === papel) {
    console.log(lose)
    console.timeEnd('game2')

  } else {
    console.log(win)
    console.timeEnd('game2')
  }
}