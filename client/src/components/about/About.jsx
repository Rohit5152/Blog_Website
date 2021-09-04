import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Blog Website</Typography>
                <Typography variant="h5" className={classes.text}>I'm Rohit a developer. 
                    I've built website where you can share your views and share your Knowledge with ours and .<br />
                    If you like this please Share it with your friends and Enjoy...
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Rohit5152" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/rohit-kadyan-8ab5851ba" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:rohitlovescoding@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;