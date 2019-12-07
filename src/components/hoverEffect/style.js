import React from 'react';
export default ()=> (
    <style js="true">
        {`
      body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #222;
}

ul {
  display: flex;
  // flex-direction: column;
  align-items: start;
  list-style-type: none;
}
ul li {
  padding: 16px 0;
  margin: 80px;
}
ul li a {
  position: relative;
  display: block;
  text-decoration: none;
  font-family: "Lato";
  font-size: 2rem;;
  color: #4DC1F9;
  text-transform: uppercase;
  padding: 4px 0;
  transition: 0.5s;
}
ul li a::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: #ff7000;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}
ul li a:hover {
  color: #95a5a6;
}
ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
         `}
    </style>
    );
