import mongoose, { Document, Schema } from 'mongoose';
import * as bcrypt from 'bcryptjs'


interface IUser  {
	eMail:string,
	userName:string,
	userPass:string,

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
    },
    userPass:{
        type: String,
        trim: true,
        required: [true,"eMail is Required"],
    }
},{collection:"Users"})


UserSchema.pre('save', async function (next) {
    if (!this.isModified('userPass')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.userPass = await bcrypt.hash(this.userPass, salt);

});

const userSchema = mongoose.model<IUser>("user",UserSchema)
export default userSchema