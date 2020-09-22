const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');
const ejs = require('ejs-locals')

app.use(express.static(__dirname + 'public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.use(cors());
app.use(ejs);

app.get('/',(req,res)=>{
    res.render('./frontpage')
})


app.listen(3000)