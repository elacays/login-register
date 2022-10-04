import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import bodyParser, { json } from 'body-parser'
import userSchema from "./Model/UserModel"
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DATABASE||"")
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app: Express = express();
const port = process.env.PORT || 5000;

const user = new userSchema()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post('/create',async (req,res) =>{
    user.eMail= await req.body.eMail
    user.userName=await req.body.userName
    user.userPass=await req.body.userPass
    user.save()

    
})

