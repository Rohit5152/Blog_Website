import { useState, useEffect } from 'react'
import { Box, Button, TextareaAutosize, makeStyles } from '@material-ui/core'
//import api from API.js
import { newComment, getComments } from '../../services/api'
//comment component 
import Comment from './Comment'

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: 'flex'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    }
})
//an object to store comments of a blog a siave it to monogo db
const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const classes = useStyles();

    const url = 'https://static.thenounproject.com/png/12017-200.png';
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    //Now when we add a comment we want that it calls eveytime
    const [toggle,setToggle] =  useState(false);

    useEffect(() => {
        const getData = async () => {
            let response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post,toggle])
    // console.log(post);
    const handleChange = (e) => {
        setComment({
            ...comment,
            name: post.user,
            postId: post._id,
            comments: e.target.value
        })

    }
    const postComment = async () => {
        await newComment(comment);
        //when click button setToggle call
        setToggle(prev => !prev)
    }

    return (
        <Box>
            <Box className={classes.component}>
                <img className={classes.image} src={url} alt="dp" />
                <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={4}
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)}
                // value={data}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    onClick={(e) => postComment(e)}
                >Post</Button>
            </Box>
            {
                comments && comments.map(comment =>(
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box>
    )
}
export default Comments;
