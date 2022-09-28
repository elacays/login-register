import mongoose, { Schema } from "mongoose"
interface IUser  {
	id?:number,
	eMail:string,
	userName?:string,
	userPass?:string,
	confirmPass?:string

}
var validateEmail = function(email:any) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const UserSchema = new Schema<IUser>({
    eMail:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true,"eMail is Required"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    userName:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true,"eMail is Required"],
        minLength:{value:3,message:"User Name should be at least 3 chars long"},
        maxLength:64
    },
    userPass:{
        type: String,
        trim: true,
        required: [true,"eMail is Required"],
        minLength:{value:3,message:"Password should be at least 6 chars long"},
        maxLength:64
    }
},{collection:"Users"})

const userSchema = mongoose.model<IUser>("user",UserSchema)
export default userSchema