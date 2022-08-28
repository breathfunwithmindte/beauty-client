import React from 'react';
import "../css/uppersection.css";
import images from "../../../images";
import config from "../../../bssl/config.json";
import { Button, Divider } from '@mui/material';

const SalonCard = ({salon}) => {


    return (
        <div className='salons--card--container d-flex j-cont-between'>
            <div className='p0 salons--card--container-image-wrapper' style={{height: "fit-content"}}>
                <img src={(config["mode"] === "dev" ? config["dev-domain"] : config["prod-domain"]) + salon.avatar} className="salons--card-image" />
            </div>
            <div className='salons--card-details p0 bg0'>
                <strong>{salon.name}{JSON.stringify(salon.availability)}</strong>
                <Divider  style={{width: "92%", marginTop: "1rem"}} />
                <p className='my1'>{salon.description}</p>
                <p className='my1' style={{color: "var(--clr2)"}}>
                    {salon.services.map(i => {
                        const curr = config["salons-services"].find(f => f.service === i);
                        if(!curr) return i
                        return curr.title
                    }).join(", ")}
                </p>
                <Divider  style={{width: "92%", margin: "1rem 0px"}} />
                <Button variant="outlined">περιήγηση</Button>
            </div>
        </div>
    );
};

export default SalonCard;