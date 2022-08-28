import { Button } from '@mui/material';
import React from 'react';
import config from "../../bssl/config.json"
import Header from './comps/Header';
import "./css/Homepage.css";

const Homepage = () => {

    return (
        <div className='homepage'>
            <Header />
            <div className='homepage--image-wrapper'>
                <img className='homepage--img' src={config["home-img-src"]}  />
                <div className='homepage--search-wrapper d-flex al-items-center' style={{width: "69%", minWidth: 256, maxWidth: 492}}>
                    <input className='homepage--search-input mr1' placeholder='your - location' />
                    <Button style={{width: 128}} variant="contained">Lets go !!</Button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;