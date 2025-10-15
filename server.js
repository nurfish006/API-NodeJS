import express from 'express';
import { StatusCodes } from 'http-status-codes';


const app = express();
const port=8000;
app.use(express.json());
const STATUS={
    success:'OK',
    failure:'NO'
}

app.get('/a',(req,res)=>{
    res.send(' Hello Nura!');
});

app.post('/add', (req,res) =>{
    try {
        const data = [];
        data.push(req.body);
        res.status(StatusCodes.CREATED).send({
          status:STATUS.success,
          data: req.body
    });
}catch(error){
    res.status(StatusCodes.BAD_REQUEST).send({
        status:STATUS.failure,
        error:'Invalid JSON data'
    });
}
})
app.listen(port, ()=>{
    console.log(`server started on port : ${port}`);
});
