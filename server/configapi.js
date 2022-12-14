/*
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json({ limit: '10mb'}))

const credentials ={ 
    user: "root",
    host: "localhost",
    password: "",
    database: "administracion_db"
}

app.post('/api/login', (req,res)=> {
    const { username, password } = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query("SELECT * FROM userssadm WHERE ema_usrs =? AND pas_usrs = ?", values, (err, result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length>0){
                res.status(200).send(result[0])
            }else{
                res.status(400).send('error verifica tus datos')
            }
        }
    } )
})