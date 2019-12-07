import React,{useState} from 'react';
import Page2 from './containers/page2';
import HomePage from './containers/mainpage';
import Particales from './components/Particles/particles'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Planets } from 'react-preloaders';
export default()=>{
  return(
  <React.Fragment>
      <BrowserRouter>
          <Switch>
              <Route path={"/"} exact={true} component={HomePage}/>
              <Route path={"/page2"}  component={Page2}/>
              <Route path={"/page3"}  component={Particales}/>
          </Switch>
      </BrowserRouter>
      <Planets animation="slide-left"/>
  </React.Fragment>
  );
}