import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const useStyle = makeStyles({
    component: {
        background: '#ffffff',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    }

})
const Header = () => {
    const classes = useStyle();

    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    if (authState && authState.isPending) return null;

    const login = async () => history.push('/login');
    
    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ? 
    <button onClick={logout} style={{
        background: 'unset',
        border: 'none',
        fontSize: 17,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        opacity: 0.8
    }}>Logout</button> :
    <button onClick={login}>Login</button>;
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container} >
                {/* //here Typography is the replace ment of p */}
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>HOME</Typography>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>ABOUT</Typography>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>CONTACT</Typography>
                </Link>
                <Typography>{button}</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;