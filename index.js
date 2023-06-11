const express = require('express')
const colors = require("colors");
const app = express();
const connectDB = require("./config/db");
const morgan=  require('morgan')
const cors=require('cors')
const users=require("./routes/users")
const auth=require("./routes/auth")

connectDB();
console.log(` this is the node env ${process.env.NODE_ENV}`) 
console.log(app.get('env'))

app.use(express.json()); 
app.use(express.static('public'))
app.use(cors())
if (app.get('env') === 'development')
  app.use(morgan('tiny'))

app.use('/api/login',auth);
app.use('/api/users',users);


const port = process.env.PORT || 5000; 

app.listen(port, () =>  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
      .bold))