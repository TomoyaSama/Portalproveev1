/*
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "administracion_db"
});
app.post("/create", (req,res)=>{
    const nempresa= req.body.nempresa;
    const correoe= req.body.correoe;
    const rfc= req.body.rfc;
    const nombrec= req.body.nombrec;

    db.query("INSERT INTO userssadm (nomb_usrs,ema_usrs, emp_usrs,rfc_usrs) VALUES (?,?,?,?)",
        [nombrec,correoe,nempresa,rfc],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
        );
});

app.listen(3001,()=>{
    
})