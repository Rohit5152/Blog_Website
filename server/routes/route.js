import express from 'express';
// // import { updatePost } from '../../client/src/services/api.js';
import { createpost,getAllPosts,getPost,updatePost,deletePost} from '../controller/post-controller.js';
import {uploadImage,getImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js'
import {newComment,getComments,deleteComment} from '../controller/comment-controller.js'
const router=express.Router();

router.post('/create',createpost);

//Now we have get the from monogo db
router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);


//to pass update data to monogodb

router.post('/update/:id',updatePost);

//To delete a post from Mongodb... 
router.delete('/delete/:id',deletePost);
router.post('/file/upload',upload.single('file'), uploadImage);
//to get back the image
router.get('/file/:filename',getImage);
//route for comment section
router.post('/comment/new',newComment)
//now we have to get back our  commments
router.get('/comments/:id',getComments);
//to delte a comment 
router.delete('/comment/delete/:id',deleteComment);
export default router;