import React from 'react';
export default ()=> (
    <style js="true">
        {`
       /* Code By Webdevtrick ( https://webdevtrick.com ) */
@charset "UTF-8";

body {
  background-color: #333;
  color: #fff;
  padding-top: 25%;
  text-align: center;
}
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
h3 {
  font-family: 'Roboto Condensed';
  color: #fff;
  font-weight: 300;
}
.button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  font-size: 52px;
  transition: all 0.4s ease-in;
}
.button span[class^='ion'] {
  position: relative;
}
.button:before {
  content: '';
  background-color: #fff;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: scale(0.001, 0.001);
          transform: scale(0.001, 0.001);
}
.button:focus {
  outline: 0;
  color: #fff;
}
.button:focus:before {
  -webkit-animation: Click_Effect 0.8s ease-out;
          animation: Click_Effect 0.8s ease-out;
}
@-webkit-keyframes Click_Effect {
  50% {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 1;
  }
}
@keyframes Click_Effect {
  50% {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 1;
  }
}
         `}
    </style>
    );
