const express=require('express');
const port=8080;
const app=express();



app.listen(port,function(err){
    if(err){
        console.info(`Error in starting yje application ${err}`);
    }
    console.info(`App is running on port:${port}`)
})
