/* jshint esversion : 6 */
// ---------------------------------------< Headers>----------------------------------------------------
const express = require('express');

var Twit = require('twit');

var Sentiment = require('sentiment');

var sentiment = new Sentiment();

const bodyParser = require('body-parser');

const { spawn } = require('child_process');

const _ = require('lodash');

const https = require('https');

const app = express(); 

const { ppid } = require('process');

const { dirname } = require('path');

require("dotenv").config();

app.set('views', __dirname+'/views ');

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
// ---------------------------------------< Headers>----------------------------------------------------
// ---------------------------------------< Variables>----------------------------------------------------
const T = new Twit ({
    consumer_key : process.env.consumer_key,
    consumer_secret : process.env.consumer_secret,
    access_token : process.env.access_token,
    access_token_secret : process.env.access_token_secret,
    timeout_ms:           60*1000,  
    strictSSL:            true, 
});
// ---------------------------------------< Variables>----------------------------------------------------
app.listen(process.env.PORT || 3000, function(){
    console.log("Listening...");
});

app.get("/" , function (req, res) {
    console.log("fdsfasfanf;al",req.body.input);
    T.get('/search/tweets', { q: '#Codechella  since:2020-01-01', count: 25 }, function(err, data, response) {
        res.render('index', {yourTweet : '', Items: data});
    });
    // res.render('index');
    
});

app.post('/', function(req, res){
    // console.log("inside post = ",req.body.input);
    T.get('/search/tweets', { q: '#Codechella  since:2020-01-01', count: 25 }, function(err, data, response) {
        res.render('index', {yourTweet : req.body.input, Items: data});
    });
});


app.get("/healthFeed", function(req, res){
    T.get('/search/tweets', { q: 'need help emergency medical since:2020-01-01', count: 30 }, function(err, data, response) {
        res.render('health', {listItems: data, sent : sentiment});
        for(var i = 0 ; i < data.statuses.length; i++){
            var results = sentiment.analyze(data.statuses[i].text);
            if(results.score < 0){
                // $('body').append();
                array.push(data.statuses[i].text);
                console.log(results);
            }
            
        }
        
    });
});
