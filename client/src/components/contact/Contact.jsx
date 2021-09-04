  

import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'http://mrtaba.ir/image/bg2.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px top -100px',
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


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Typography variant="h5" className={classes.text}>
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/rohit-kadyan-8ab5851ba" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:rohitlovescoding@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact;