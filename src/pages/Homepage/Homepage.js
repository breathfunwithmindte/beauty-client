import React from 'react';
import config from "../../bssl/config.json"
import Header from './comps/Header';
import "./css/Homepage.css";

const Homepage = () => {

    return (
        <div className='homepage'>
            <Header />
            <img src={config["home-img-src"]} style={{ width: "100vw", height: "92vh" }} />
        </div>
    );
};

export default Homepage;