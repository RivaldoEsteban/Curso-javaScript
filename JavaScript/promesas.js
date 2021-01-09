

const promesa = new promise(function(todoBien, todoMal) { 
    todoBien();                                              //las promesas tienen como parametro una funsion
                                                  // y la function resive 2parametros , que son
}) 
promesa
  .then(function () {
    console.log('Todo bien')  //.then se aplica cuando funciona bien la promesa
  })     
  .catch(function() {
    console.log('Todo mal') // .catch se aplica cuando la promesa no funciona
  })                                   