import express from 'express';
import Connnection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('/',routes);

const PORT = 8000;

Connnection();

app.listen(PORT,() => console.log("SERVER IS STARTED ON PORT 8000"));