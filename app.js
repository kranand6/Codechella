/* jshint esversion : 6 */
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const { functionsIn } = require('lodash');
const https = require('https');
const app = express(); 
const _ = require('lodash');


app.listen(process.env.PORT || 3000, function(){
    console.log("Listening...");
});

app.get("/", function (req, res) {
    app.render('body');
});



