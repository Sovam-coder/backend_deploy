require("dotenv").config();
var express = require('express');
var cors=require('cors');
var mongoose=require('mongoose');
const app = express()
const port = process.env.PORT || 3000;
var appRoutes=require('./routes/appRoutes');



mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("Mongodb connected ")
}).catch(err=>console.log(err));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',appRoutes)


app.listen(port, () => {
  console.log(`The Application is Running on port : ${port}`)
})

