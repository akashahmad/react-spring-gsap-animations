import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hook';
import { GlobalStyles } from '../components/Hamburger/global';
import { theme } from '../components/Hamburger/theme';
import Burger  from '../components/burger/burger';
import  Menu  from '../components/Menu/Menu';
export default ()=> {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </ThemeProvider>
        </>
);
}
