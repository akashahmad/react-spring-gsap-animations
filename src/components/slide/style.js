import React from 'react';
export default ()=> (
    <style js="true">
        {`


#slide {
    top: 0px;
    bottom: 0px;
    right: 100%;
    width: 100%;
    z-index: 99999999;
    position: absolute;
     left: -1686px;
-webkit-animation: slide 0.5s forwards;
-webkit-animation-delay: 0.2s;
animation: slide 3s;
animation-delay: 0.4s;
}

@-webkit-keyframes slide {
50%{left:0;}
100% { right: 0; }

}


         `}
    </style>
);
