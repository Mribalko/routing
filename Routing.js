/**
 * Created by mriba on 12.06.2017.
 */
const port = process.env.POR || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());

app.get('/', function(req, res){
    res.send('Hello, Express.js');
});

app.get('/hello', function(req, res){
    res.send('Hello stranger!');
});

app.get('/hello/:name', function(req, res){
    res.send(`Hello, ${req.params.name}!`);
});

app.post('/post', function(req, res){

    if(req.headers.header != 'Key')
        return res.sendStatus(401);

    if(req.body)
        res.json(req.body);
    else
        res.sendStatus(404);
});

app.all('/sub/*', function(req, res){
    res.send(`You requested URI: ${req.url}`);
});


app.listen(port, function () {
    console.log(`Server on port ${port}!`);
});