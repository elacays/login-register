import userSchema from "../Model/UserModel"
import { Request, Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const user = new userSchema()
const validateToken =async (req:Request,res:Response,next:NextFunction)=>{
    
    return res.status(200).json({
        message:"authorized"
    })
}

const login =async (req:Request,res:Response,next:NextFunction)=>{



    //Kullanıcı Kayıtlımı
    const user = await userSchema.findOne({ eMail: req.body.eMail });
    if (!user) return res.status(400).send('Email or Password is wrong')

    //Şifre-mail doğrulama
    const validPass = await bcrypt.compare(req.body.userPass, user.userPass);
    if (!validPass) return res.status(400).send('Email or Password is wrong')

    //Giriş Tokeni oluşturma
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY || "");
    if(token){
        
        res.cookie('token', token, { maxAge: 900000, httpOnly: false });
        res.send("authorized")
    }


}


const register =async (req:Request,res:Response,next:NextFunction)=>{
    user.eMail= await req.body.eMail
    user.userName=await req.body.userName
    user.userPass=await req.body.userPass
    user.save()
}


export default {validateToken,login,register}


