/*
var mysql = require('mysql')

var conexion = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "administracion_db"
});

conexion.connect(
    function(err){
        if(err){
            throw err;
        }else{
            console.log('Conexion Exitosa');
        }

});

conexion.end();