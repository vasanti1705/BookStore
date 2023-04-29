 const express = require('express');
 const mongoose = require('mongoose');
 const router = require("./routes/book-routes");
 const app = express();
 mongoose.set('strictQuery',false);
 
 const cors = require('cors');
//middlewares
//  app.use('/',(req,res,next)=>{
//   res.send("this is our starting app");
//  });
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect('mongodb://127.0.0.1:27017/bookstore',{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.connect('mongodb+srv://admin1:iflvtaGaoGXv09ja@cluster0.ctzosox.mongodb.net/bookstore?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
app.listen(5000);
  var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("we are connected successfully..")
});





 //password mongo:iflvtaGaoGXv09ja