// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import { Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppWithRouterAccess from "./AppWithRouterAccess";
import ContextProvider from "./context/ContextProvider";

// import Header from "./components/Header";
// import Home from "./components/home/Home";
// import Detailview from "./components/post/Detailview";
// import Createview from "./components/post/Createview";
// import Updateview from "./components/post/Updateview";
function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <AppWithRouterAccess />
      {/* <Header /> */}
      {/* <Box style={{marginTop: 64}}>
    <Switch>
    <Route exact path="/" component={Home}  />
    <Route exact path="/details/:id" component={Detailview} />
    <Route exact path="/create" component={Createview} />
    <Route exact path="/update/:id" component={Updateview} />
    </Switch>
  </Box> */}
    </BrowserRouter>
  </ContextProvider>
  )
}

export default App;
