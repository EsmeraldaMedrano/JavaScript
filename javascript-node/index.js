/*const request = require('request');
request('http://google.com', function(){
  console.log('Terminé la petición de google');
});
console.log('Yo voy despues de la peticion a google')

//Promesa  Estados; fullfield:completa, rejected:no terminada con exito(error)
//pending:pendiente, setled: finalizada con exito o con error
const rp = require('request-promise');
rp('http://google.com') // devuelve un objeto tipo Promise;
  .then(function(html){
      console.log('Terminé la petición de google');
  }).catch(function(err){
    console.log(err)
  });
const request = require('request');

function leer(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, response){
      if(err) {
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

leer('http://codigofacilito.com').then(function(response){
  console.log(response);
}).catch  (function(err){
  console.log(err);
});*/

//multimples promesas

let p1 = new Promise((resolve, reject)=> setTimeout(resolve,500,'HolaMundo'));
let p2 = new Promise((resolve, reject)=> setTimeout(resolve,600,'segundo HolaMundo'));
let p3 = Promise.reject();
let saluda = ()=> console.log("Hola a todos");
/*p1.then(function(){
  p2.then(function(){
    saluda();
  });
});*/ //infierno del callback

Promise.all([p1,p2,p3]).then(resultados=>{ //genera una promesa en caso de que sea exitosa o falle
  saluda();
}).catch(()=> console.log('fallé'));
