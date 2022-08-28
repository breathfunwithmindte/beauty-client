import React from 'react';
import "./Header.css";
import config from "../../bssl/config.json";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()

    return (
        <header style={{width: "100%", minHeight: 69, zIndex: 14, position: "sticky", top: 0}} className="header d-flex al-items-center bg0 j-cont-between primary-padding py1 f-wrap">
            <h3 className='beauty-font'>BEAUTY NEXT DOOR</h3>
            <div className='d-flex al-items-center'>
                {config["home-header-options"].map((o, i) => {
                    return (<Button key={i}>{o}</Button>)
                })}
                <Button variant="outlined">Login</Button>
            </div>
        </header>
    );
};

export default Header;