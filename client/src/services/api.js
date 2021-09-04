import axios from 'axios';

const URL = 'http://localhost:8000'
export const CreatePost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  }
  catch (error) {
    console.log("error while calling api", error);
  }

}

//getAllPost()
export const getAllPosts = async (params) => {
  try {
    let response = await axios.get(`${URL}/posts${params}`)
    return response.data;
  } catch (error) {
    console.log("Error while Calling Api", error);
  }
}
//getPost
export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error while calling getPost API ', error);
  }
}
export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("error while calling api", error);

  }
}

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("error while calling  deletePost api", error);

  }
}
//to upload picture on mongoDB
export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("Error while uploading the image in api file", error);
  }

}

export const newComment = async (data) => {
  try {
    return await axios.post(`${URL}/comment/new`, data);
  } catch (error) {
    console.log('Error while calling newComment API ', error)
  }
}
//to get back the comments
export const getComments = async (id) => {
  try {
    let response = await axios.get(`${URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error while calling getComments  API ', error)
  }
}
//to dlete a comment
export const deleteComment = async (id) => {
  try {
      return await axios.delete(`${URL}/comment/delete/${id}`);
  } catch(error) {
      console.log('Error while calling deleteComment API ', error)
  } 
}