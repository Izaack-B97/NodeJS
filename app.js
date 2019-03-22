const express= require('express');
const app = express();

app.set('view engine','pug');

app.get('/hellow', function(req,res){
    //res.send('Hola mundo :D');
    res.render('index',{hola:'Que onda persona desconocida'});
});

app.listen(3000, function(){
  console.log('El servidor esta corriendo en el puerto => 3000');
});
