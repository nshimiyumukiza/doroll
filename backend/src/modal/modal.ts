import mongoose,{Model,Document, Schema} from "mongoose";

interface IUser {
    firstName:string;
    lastName: string;
    email:string;
    phone:number;
    password:string;
    confrimPassword:string
}

const userSchema = new Schema<IUser>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    confrimPassword:{
        type:String,
        required:true
    }
},{timestamps:true})

const User:Model<IUser> = mongoose.model<IUser>("User",userSchema)
export default User