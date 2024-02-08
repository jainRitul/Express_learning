const express = require("express");
const app = express();
// console.dir(app);


//listening to port
const port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})


//sending request
app.use((req,res)=>{
    // console.log(req);
    console.log("request recived");
    let code = "<h1>standard html res</h1> <ul><li>apple</li></ul>"
    res.send(code);

    //simple obj response
    // res.send({
    //     name:"apple",
    //     color :"red"
    // })


    //simple text response
    // res.send("this is basic response");
})
