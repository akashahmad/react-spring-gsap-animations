import React,{usestate,useEffect} from 'react'
import Style from './style'
export default () => {
    return(<>
    <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">posts</a></li>
        <li><a href="#">categories</a></li>
        <li><a href="#">about</a></li>
    </ul>
    <Style/>
    </>);
};

