import actionModal from "../models/actionModal.js";
import postsModal from "../models/postsModal.js";

export const createPostController = async (req,res,next)=>{
    try{
        //authorId will come from token
        const {content,name,authorId} =req.body;
        const newPost = await postsModal.create({
            name:name,
            content:content,
            authorId:authorId,
        })
        res.status(200).json({
            data:newPost,
            message:"Post created",
            status:true
        })
    }catch(err){
        next(err);
    }

}
export const actionController = async (req,res,next)=>{
    try{
        //authorId will come from token
        const {postId,liked,disliked,authorId} = req.body;
        
        const new_action = await actionModal.create({
            postId:postId,
            liked:liked || false,
            disliked:disliked || false,
            userId:authorId
        })
        res.status(200).json({
            data:new_action,
            message:"you liked the post",
            status:true
        })

    }catch(err){
        next(err);
    }
}

export const getAllPostController = async (req,res,next)=>{
    try{
        const {userId ,start ,end} = req.body;
        const getPosts = await postsModal.find({
            where:{
                authorId:userId
            }

        }).limit(10)
        return res.status().json({
            message:"All posts.....",
            status:true,
            data:getPosts
        })

    }catch(err){
        next(err);
    }
}
export const postEditController = async(req,res,next)=>{
    try{
        

    }catch(err){
        next(err);
    }
}