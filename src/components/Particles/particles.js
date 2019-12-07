import React from 'react'
import Particles from 'react-particles-js';
export default ()=>
{
    return(
        <Particles
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 5
                        }
                    },
                    number:{value:200}
                }
            }}
            style={{
                width: '100%',
                backgroundColor:'black',
            }}
        />
    );
}
