import express, { Express, Request, Response } from 'express'
import controller from '../Controller/AuthController'

const app: Express = express();


app.post('/create', controller.register)
app.post('/login', controller.login)

export {app as authRouter}