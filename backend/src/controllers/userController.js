import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

export const signupController = async (req,res,next)=>{
    try{
        const {name ,userName, password , email} = req.body;
        const emailVaildation = await userModel.findOne({email:email});
        if(emailVaildation){
           return  res.status(400).json({
                message:"YOu have an account",
                data:[],
                status:false,
            })
        }
        const hashPassword = await bcrypt.hash(password,12);
        const user = {
            name:name,
            userName:userName,
            email:email,
            password:hashPassword,
        }
        let new_user = await userModel.create(user);
        new_user.password = ""
        res.status(200).json({
            data:new_user,
            message:"Welcome...",
            status:true,
        })
    }catch(err){
        next(err);
    }
}
