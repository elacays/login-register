import express, { Express } from 'express'
import mongoose from 'mongoose'
import bodyParser, { json } from 'body-parser'
import { authRouter } from './Routes/AuthRouter'

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


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(authRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});


