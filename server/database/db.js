import mongoose from 'mongoose';


const Connection = async ()=>{
  try{
    //if u cahnge here than also cahnge in upload file...
   const URL='mongodb+srv://user:user1234@cluster0.sm7jz.mongodb.net/NEWBLOG?retryWrites=true&w=majority'
    // cont URL= 'mongodb+srv://user:user1234@newblog.eamww.mongodb.net/BLOG?retryWrites=true&w=majority'
    await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify: false});
    console.log("Connected to Mongoo db");
  }
  catch(error){
      console.log("Error while Connecting ",error);
  }
}

export default  Connection;