const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');
const engine = require('ejs-locals');

app.use(cors());
//why is this not able to work?
//app.use(express.static(__dirname + 'public'))

app.use(express.static('public'))
app.use(bodyparser.json())
app.use(express.urlencoded({extended: false}))

//app.use(ejs);
app.engine('ejs', engine);
app.set('views','./views')
app.set('view engine','ejs')

//DB connection
// const {Client} = require('pg')
// const client = new Client({
//     user: 'postgres',
//     host: '127.0.0.1',
//     database: 'expense',
//     password: 'test',
//     port: 5432});
// client.connect();    

var knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
          }
    }
  });

app.get('/',(req,res)=>{
    res.render('frontpage')
})

app.post('/saveData', (req,res)=>{
  console.log(req.body)
    const {tipAmt, bill, date, rest} = req.body
    
    knex('tipDB')
    .returning('*')
    .insert({
        date:date,
        restaurant:rest,
        tipAmt:tipAmt,
        totalAmt : bill
    })
    .then((response)=>res.json(response))
    .catch((err)=>res.status(400).json(err))

})


app.listen(3000)