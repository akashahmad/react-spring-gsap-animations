import React,{useState} from 'react'
import Animations from '../components/animationsGreenStocks/animation';
import ClickEffect from '../components/clickEffect/clickEffect'
import HoverEffect from '../components/hoverEffect/MenuHoverunderlineEffect'
import AnimatedTextt from '../components/animatedText/animatedText'
export default ()=>{
    return(
        <>
        <Animations/>
        <ClickEffect/>
        <HoverEffect/>
        <AnimatedTextt/>
        </>
    );
}