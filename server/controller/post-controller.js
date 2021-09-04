// // import post from "../schema/post-schema.js";
import Post from "../schema/post-schema.js";

export const createpost= async (req,res)=>{
console.log(req.body);
try{
const post= await new Post(req.body);
post.save();

res.status(200).json('blog saved succesfully');
}catch(error){
    res.status(500).json(error);
}

}

//getAllposts function
export const getAllPosts= async(req,res)=>{
    const username=req.query.username;
  const category=req.query.category;
  let posts;
    try{
        if(username) 
        posts = await Post.find({ user: username });//errror can be possible?...
    else if (category) 
        posts = await Post.find({ categories: category });
    else 
        posts = await Post.find({});

    //  let posts= await Post.find({});
     res.status(200).json(posts);
    }catch(error){
        res.status(500).json(error);
    }
}
//getPost function
 export const getPost= async (req,res)=>{
     try {
       let post= await Post.findById(req.params.id);
       res.status(200).json(post);   
     } catch (error) {
         res.status(500).json(error);
     }
 }

 //to pass the updated data to monogodb;;

   export const updatePost= async(req,res)=>{
       try {
          await Post.findByIdAndUpdate(req.params.id,{$set: req.body});
          res.status(200).json("Blog Updated Successfully");
      } catch (error) {
          console.log("Error while calling api",error);
      }
  }


//To delete a post .
export const deletePost= async(req,res)=>{
    try {
      let post= await Post.findById(req.params.id);

      await post.delete();
       res.status(200).json("Blog Updated Successfully");
   } catch (error) {
       console.log("Error while calling api",error);
   }
} 