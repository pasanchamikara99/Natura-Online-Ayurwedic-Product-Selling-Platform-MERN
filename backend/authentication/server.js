const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user')

//express app
const app = express();

app.use(express.json())

app.use((req,res,next)=>{
    //console.log(req.path,req.method)
    next()
})

app.use("/api/user", userRoutes);

mongoose
  .connect(
    "mongodb+srv://pasan:990108@mernstack.1e8qoha.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
        console.log("this app listen on port 4000");
        console.log("this app connect to the database");
      });    
  })
  .catch((error) => {
    console.log(error);
  });

// listen for request
