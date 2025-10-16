import express from 'express';
import { StatusCodes } from 'http-status-codes';
import appRoutes from "./routes.js";

const app = express();
const port=8000;

app.use(express.json());
app.use('/v1',appRoutes);


app.listen(port, ()=>{
    console.log(`server started on port : ${port}`);
});
