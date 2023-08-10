const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const port = 3200;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("listening...");
})


const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    database:'quanlysv'
})
app.post('/signup', (req, res) => {
   const {email,password} = req.body
    res.status(200).json({ message: 'Signup successful' });
  });


app.post('/signin',(req,res) => {
    const { email, password } = req.body;

    res.status(200).json({ message: 'Signin successful' });
  })
