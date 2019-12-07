import React from 'react'
import Typical from 'react-typical'
import Style from './style'
export default () => {
    return(<>
    <Typical
        steps={['A', 1000, 'Animated Typing!', 600]}
        loop={Infinity}
        wrapper="p"
    />
    <Style/>
    </>);
};

