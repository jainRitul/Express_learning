const express = require('express');
const app = express();

let port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})


app.get("/",(req,res)=>{
    res.send("you send a req on root")
})
app.get("/search",(req,res)=>{
    res.send("you send a req on search")
})
app.get("/help",(req,res)=>{
    res.send("you send a req on help")
})
app.get("*",(req,res)=>{
    res.send("path not exsits");
})
app.post("/",(req,res)=>{
    res.send("path not exsits");
})