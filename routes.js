import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './src/services/user.service.js';
const router = express.Router();



const STATUS={
    success:'OK',
    failure:'NO'
}

router.get('/hello',(req,res)=>{
    res.send(' Hello Nura!');
});

router.post('/add', (req,res) =>{
    try {
        const {body: user} =req;

        if(!user.name){
        return res.status(StatusCodes.BAD_REQUEST).send({
        status:STATUS.failure,
        error:'Name required'
          }
        }
    userService.addUser();
    res.status(StatusCodes.CREATED).send({
          status:STATUS.success,
          data: user
    });
}catch(error){
    res.status(StatusCodes.BAD_REQUEST).send({
        status:STATUS.failure,
        error:'Invalid JSON data'
    });
}
});

 export default router;