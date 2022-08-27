import { Button } from '@mui/material';
import React from 'react';

const Header = () => {

    return (
        <header className='homepage-header  d-flex j-cont-end p1'>
            <Button>About</Button>
            <Button>Businesses</Button>
            <Button variant="outlined">Login</Button>
        </header>
    );
};

export default Header;