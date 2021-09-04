import React, { useEffect, useState } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom'
import { getPost,deletePost } from '../../services/api';
//comment component
import Comments from '../comments/Comments';


const useStyle = makeStyles((theme) => ({
    image: {
        height: '50vh',
        width: '100%',
        objectFit: 'cover'
    }
    ,
    container: {
        padding: '0 100px'
        ,
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    icons: {
        float: 'right',
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 4,
        borderRadius: 10,

    },
    heading: {
        fontSize: 35,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px  0'
    },
    subheading: {
        color: "#878787",
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    Link:{
        textDecoration: 'none',
        color:'inherit'
    }
}))
export default function Detailview({ match }) {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    const [post, setPost] = useState({});
      
    const history=useHistory();
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
       
    }, []);

    const deleteBlog= async ()=>{
   await deletePost(post._id);
   history.push('/');
    }
    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="Banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}> <Edit className={classes.icon} color="primary" /></Link>
                <Delete onClick={()=> deleteBlog()} className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading} >
            {post.title}
            </Typography>
            <Box className={classes.subheading}>
                 <Link to={`/?username=${post.user}`} className={classes.Link} >
                      {/* //error can be possible   */}
                <Typography>
                    Author: <span style={{ fontWeight: '600' }}> {post.user} </span>
                </Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdate).toDateString()} </Typography>
            </Box>

            <Typography>{post.description} </Typography>
            <Comments post={post} />
        </Box>
    )
}
