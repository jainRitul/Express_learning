const express = require('express');
const app = express();

let port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})


//path paramtere
app.get('/:username/:id',(req,res)=>{
    // console.log(req.params);

    let {username,id} = req.params;
    let htmlStr = `<h1>welcome to page of @${username}</h1>`;
    res.send(htmlStr);
})
app.get('/',(req,res)=>{
    console.log(req.params);
    res.send("you send req to root");
})