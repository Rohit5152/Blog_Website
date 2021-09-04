import { Box, Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    container:{
  height:350,
  margin:10,
   border:'1px solid #d3cede',
  borderRadius:10,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
//   width: '30%'
'& > *':{
    padding: '0 5px 5px 5px'
}
    },
    Image:{
        height:150,
        width:'100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text:{
        color: '#878787',
        fontSize: 12
    },
    heading:{
        fontSize: 18,
        fontWeight: 600,
        textAlign:'center'
    },
    details:{
        fontSize:14,
        wordBreak: 'break-word'
    }

})

const Post = ({post}) => {
    const classes=useStyles();
    const url = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
   
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 
   
    return (
        <Box className={classes.container}>
                <img src={url} alt="post"  className={classes.Image} />
                <Typography className={classes.text}>{post.categories}</Typography>
                <Typography className={classes.heading}>{addEllipsis(post.title,20)}</Typography>
                <Typography className={classes.text}>Author: {post.user}</Typography>
  <Typography className={classes.details}>{addEllipsis(post.description,90)}</Typography>
        </Box>
    )
}
export default Post;


