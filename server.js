const express =require('express');
const app=express();
app.use(express.static('static'));
app.listen(5001, function(){
    console.log('App started on port 5001');
});