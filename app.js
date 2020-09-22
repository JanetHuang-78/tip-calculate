const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');

app.use(express.static(__dirname + 'public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.use(cors());

app.get('/',(req,res)=>{
    console.log('hi')
})