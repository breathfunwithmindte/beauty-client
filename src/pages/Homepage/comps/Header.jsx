import { Button } from '@mui/material';
import React from 'react';
import config from "../../../bssl/config.json"

const Header = () => {

    return (
        <header className='homepage-header  d-flex j-cont-end p1'>
            {config["home-header-options"].map((o, i) => {
                return (<Button>{o}</Button>)
            })}
            <Button variant="outlined">Login</Button>
        </header>
    );
};

export default Header;