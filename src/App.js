import React,{useState} from 'react';
import Page2 from './containers/page2';
import HomePage from './containers/mainpage';
import Particales from './components/Particles/particles'
import Slide from './components/slide/slide'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Animatednav from './components/animated-nav/pages'
import { Planets } from 'react-preloaders';
export default()=>{
    return(
        <React.Fragment>
            <Slide/>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact={true} component={HomePage}/>
                    <Route path={"/page2"}  component={Page2}/>
                    <Route path={"/page3"}  component={Particales}/>
                    <Route path={"/page4"}  component={Animatednav}/>
                </Switch>
            </BrowserRouter>
            <Planets />
        </React.Fragment>
    );
}