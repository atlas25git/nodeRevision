if(process.env.NODE_ENV != 'production'){
    const dotenv = require('dotenv').config();
}
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

const api_key = process.env.API_KEY;
app.get('/dinoname',async (req,res)=>{
    //functionality
    const fetchapi =await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
        }
    });
    const dinoNameRes =await fetchapi.json();
    //console.log(dinoNameRes);
    res.json(dinoNameRes);
});

app.get('/dinoimage',async (req,res)=>{
    //functionality
    const fetchapi =await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoImageRes =await fetchapi.json();
    //console.log(dinoImageRes);
    res.json(dinoImageRes);
});


app.listen(port,()=>{
    console.log('Listening at http://localhost:'+port);
});