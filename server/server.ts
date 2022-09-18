import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:123@elacays.xldbi.mongodb.net/loginRegisterDB')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post('/registerSend',(req,res) =>{
    res.send("istek geldi")
})

