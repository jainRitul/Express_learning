const express = require('express');
const app = express();

let port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})



app.get('/search',(req,res)=>{

 let { q } = req.query;
    
 //console.log(req.query);
 if(!q){
    res.send('nothing searched');
  }
  res.send(`search result for query : ${q}`);
})
// app.get('/',(req,res)=>{
//   res.send("you send req to root");
// })