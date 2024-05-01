import mongoose from "mongoose";

const schema = mongoose.Schema;
const User = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true});

const userModal = mongoose.model("User", User);
export default userModal;
