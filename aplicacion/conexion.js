const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    database:'aplicacionweb',
    user:'root',
    password:'Sinergy1980#'
});

conexion.connect(function(err){
    if(err) throw err;
    console.log('exito')
})

conexion.end()