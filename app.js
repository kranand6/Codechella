/* jshint esversion : 6 */
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const _ = require('lodash');
const https = require('https');
const app = express(); 
const { ppid } = require('process');
const { dirname } = require('path');
// require(".env").config();
const apiKey = process.env;

app.set('views', __dirname+'/views ');
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Listening...");
    console.log(apiKey.consumer_key);
});

app.get("/", function (req, res) {

    console.log("inseide get");
    res.render('index');
});

app.post('/', function(req, res){
    console.log("inside post = ",req.body.input);
    var dataToSend;
    const python = spawn('python', ['main.py']);
    res.write("<h1>Got response</h1>");
});

app.get("/health", function(req, res){
    f
});