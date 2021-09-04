import { makeStyles,Box, Typography} from "@material-ui/core";

const usestyle=makeStyles({
    image:{
background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
width:'100%',
height: '50vh',
display: 'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
'& :first-child':{
    fontSize: 65,
    color: '#ffffff',
    lineHeight: 1
},
'& :last-child':{
fontSize: 20,
background: '#ffffff'
}
    }
})

const Banner=()=>{
    const classes=usestyle();
    const url="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    return(
       <Box className={classes.image}>
           <Typography>BLOG</Typography>
           <Typography>Blogs And Articles</Typography>
       </Box>
    )
}
export default Banner;