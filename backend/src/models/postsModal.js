import mongoose from "mongoose";

const  Schema =mongoose.Schema;
const {Types} = mongoose
const Posts = new Schema({
  name:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  authorId: { type: Types.ObjectId, ref: "User" },
  archived:{
    type : Boolean
  }
},{timestamps:true});

export default mongoose.model("Post",Posts)
