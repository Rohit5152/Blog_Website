import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

 const storage = new GridFsStorage({
    url: 'mongodb+srv://user:user1234@cluster0.sm7jz.mongodb.net/NEWBLOG?retryWrites=true&w=majority'
     ,
     options: { useUnifiedTopology:true, useNewUrlParser:true },
     file:(req,file)=>{
        const match= ["image/png","image/jpg"];

        if(match.indexOf(file.mimetype) === -1)
        return`${Date.now()}-blog-${file.originalname}` ;

        return{
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}` 

        }
     }
 })
 export default multer({storage});