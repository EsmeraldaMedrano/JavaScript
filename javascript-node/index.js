/*const request = require('request');
request('http://google.com', function(){
  console.log('Terminé la petición de google');
});
console.log('Yo voy despues de la peticion a google');*/

const rp = require('request-promise');
rp('http://google.com') // devuelve un objeto tipo Promise;
  .then(function(html){
      console.log('Terminé la petición de google');
  }).catch(function(err){
    console.log(err)
  });
