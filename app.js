const express = require ('express');
const app = express();
const url = require('url');  

const puerto =process.env.PORT||3000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set("view engine","ejs");
app.set("views",__dirname+ "/views");
app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.render("index",{titulo:"Algorithmics Yacuiba"})
});
app.get("/send_feedback",(req,res)=>{
    const cursos = require('./data/data_courses.json')
    const grupos = require("./data/data_grupos.json")
    const alumnos = require("./data/data_alumnos.json")
    res.render("send_feedback",
    {
        cursos:cursos,
        grupos:grupos,
        alumnos:alumnos
    });

});
app.get("/backoffice",(req,res)=>{
    res.redirect("https://backoffice.algoritmika.org/group");
});
app.get("/plataforma_alumnos",(req,res)=>{
    res.redirect("https://learn.alg.academy/main");
});
app.get("/sendmail",(req,res)=>{
    var datos_email_string = req.query["datos_email"];
    var datos_email =  JSON.parse(req.query["datos_email"]); 
    module.exports = {
        datos_email:datos_email,
        dirname:__dirname
    }
    var send = require("./send.js");
    res.redirect(url.format({
        pathname: "./sendmailsucced",
        query: {datos_email: datos_email_string}
    }))
});
app.get("/sendmailsucced",(req,res)=>{
    
    var datos_email =  JSON.parse(req.query["datos_email"]); 
   
    res.render("succed_messagge.ejs",{datos_email:datos_email})
});
app.listen(puerto,()=>{
    console.log("Servidor a su servicio")
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      