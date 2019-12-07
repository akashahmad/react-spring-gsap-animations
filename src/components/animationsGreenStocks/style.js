import React from 'react';
export default ()=> (
    <style js="true">
        {`
        /* code by webdevtrick ( https://webdevtrick.com ) */
* {
  margin: 0;
  padding: 0;
  user-select: none;
}


.wrapper {
 position: absolute;
    top: 17%;
    left: 72%;
    transform: translate(-50%, -50%);
}

.search-box {
  width: 750px;
  height: 100px;
  position: relative;
}

.input {
  position: absolute;
  top: 20px;
  right: 50px;
  box-sizing: border-box;
  width: 0px;
  height: 63px;
  padding: 0 20px;
  outline: none;
  font-size: 18px;
  border-radius: 50px;
  color: #333;
  border: 3px solid #4DC1F9;
  transition: all 0.8s ease;
}

.btn {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #4DC1F9;
  border-radius: 50%;
  right: 45px;
  top: 10px;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  color: #fff;
  transition: all 0.8s ease;
}

.input.active {
  width: 350px;
  right: 100px;
}

.btn.animate {
  transform: rotate(-360deg);
  right: 100px;
}

         `}
    </style>
    );
