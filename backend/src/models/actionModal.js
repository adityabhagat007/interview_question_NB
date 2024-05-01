
import mongoose from "mongoose";
const {  Types } = mongoose;
const Actions = new mongoose.Schema({
    liked:{
        type:Boolean,
        default:false,
    },
    disliked:{
        type:Boolean,
        default:false
    },
    postId:{
        type:Types.ObjectId,
        ref:"Post",
    },
    userId:{
        type:Types.ObjectId,
        ref:"User"
    }
 
},{timestamps:true});
export default mongoose.model("Action",Actions)

