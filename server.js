import express from 'express';

const app = express();
const port=8000;

app.get('/a',(req,res)=>{
    res.send(' Hello Nura!');
});

app.listen(port, ()=>{
    console.log(`server started on port : ${port}`);
});
