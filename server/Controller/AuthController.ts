import userSchema from "../Model/UserModel"
import { Request, Response , NextFunction} from 'express';


const user = new userSchema()
const validateToken =async (req:Request,res:Response,next:NextFunction)=>{
    
    return res.status(200).json({
        message:"authorized"
    })
}

const login =async (req:Request,res:Response,next:NextFunction)=>{

}


const register =async (req:Request,res:Response,next:NextFunction)=>{
    user.eMail= await req.body.eMail
    user.userName=await req.body.userName
    user.userPass=await req.body.userPass
    user.save()
}


export default {validateToken,login,register}


