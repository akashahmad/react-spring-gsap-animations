import React,{usestate,useEffect} from 'react'
import Style from './style'
import $ from 'jquery';
export default ()=> {
    useEffect(() => {
        $(".btn").click(function () {
            $(".input").toggleClass("active");
            $(this).toggleClass("animate");
            $(".input").val("");
        });
    });
    return(
        <>
        <div className="wrapper">
            <div className="search-box">
                <input type="text" placeholder="Search" className="input"/>
                    <div className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
            </div>
        </div>


        <Style/>
        </>
    );
};