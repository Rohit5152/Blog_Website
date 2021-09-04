
import React from "react";
import { Box } from "@material-ui/core";
import {Switch, Route,useHistory } from 'react-router-dom'

//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import Detailview from "./components/post/Detailview";
import Createview from "./components/post/Createview";
import Updateview from "./components/post/Updateview";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
//okta file
import Login from './components/account/Login'
import { oktaAuthConfig, oktaSignInConfig } from './config';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

const oktaAuth = new OktaAuth(oktaAuthConfig);
const AppWithRouterAccess = () => {
    const history = useHistory();


    const customAuthHandler = () => {
        history.push('/login');
      };
    
      const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
      };

    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >

            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 64 }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                    <Route exact path="/details/:id" component={Detailview} />
                    <Route exact path="/create" component={Createview} />
                    <Route exact path="/update/:id" component={Updateview} />

                    //new component
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Box>
        </Security>
    )
}

export default AppWithRouterAccess;
