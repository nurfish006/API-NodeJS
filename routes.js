import express from 'express';
import { StatusCodes } from 'http-status-codes';


const router = express.Router();
const port=8000;


const STATUS={
    success:'OK',
    failure:'NO'
}

router.get('/a',(req,res)=>{
    res.send(' Hello Nura!');
});

router.post('/add', (req,res) =>{
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
});

 export default router;