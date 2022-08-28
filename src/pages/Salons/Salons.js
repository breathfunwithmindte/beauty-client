import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, LinearProgress, Radio, RadioGroup } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import config from "../../bssl/config.json"
import Components from '../../components';
import "./css/Salons.css";
import Card from './comps/SalonCard';
import images from '../../images';
import useApiFetch from '../../bssl/useFetchApi';

const Salons = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [beautydeals, setBeautydeals] = useState([]);
    const [availability, setAvailability] = useState("2");

    const url_param = new URLSearchParams("");
    beautydeals.map(i => url_param.append("beautydeals", i));
    url_param.set("availability", availability)
    url_param.set("category", id);

    const [res, loading, error, refetch] = useApiFetch(`salons/read?${url_param.toString()}`);

    const array_change = (e) => {
        if (e.target.name === "beautydeals") {
            if (beautydeals.some(s => s == e.target.value)) {
                setBeautydeals(beautydeals.filter(f => f !== e.target.value))
            } else {
                setBeautydeals([...beautydeals, e.target.value])
            }
        }
    }


    const current = useMemo(() => {
        return config["salons-services"].find(f => f.service == id);
    }, [id])

    if (!current) return (
        <div className='salons'>
            <Components.Header />
            <main className='salons-main'>
                <h1>Current category of salons is not support || 404</h1>
                <p>choose one of</p>
                {config["salons-services"].map((s, i) => {
                    return (
                        <Button onClick={() => navigate(`/s/${s.service}/search`)} variant="contained" style={{ textTransform: "none" }}>{s.title}</Button>
                    )
                })}
            </main>
        </div>
    )
    return (
        <div className='salons'>
            <Components.Header />
            <img className='salon--img-website' src={images[current.image]} style={{ width: "calc(100% - 6.9px)", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1 }} />
            <main className='salons-main primary-padding'>
                <img className='salon--img-mobile' src={images[current.image]} style={{ width: "100%", height: "auto" }} />
                <div className='w-100 mb0 primary-padding py0' style={{ background: "rgba(255,255,255,0.34)" }}>
                    <h1 className='beauty-font'>{current.title}</h1>
                    <br />
                    <pre >{current.description}</pre>
                </div>
                <div className='salons-primary-section d-flex bg0 primary-padding pt0'>
                    <div className='salons-primary-section-filters' style={{ overflowY: "auto", maxHeight: "calc(100% - 92px)" }}>
                        <FormControl style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                            <FormLabel style={{ marginBottom: "1rem" }} >Κατηγορίες</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                value={id}
                                name="radio-buttons-group"
                                onChange={e => navigate(`/s/${e.target.value}/search`)}
                            >
                                {config["salons-services"].map((sal, key) => {
                                    return (
                                        <FormControlLabel key={key}
                                            control={<Radio  name="availability" value={sal.service} checked={id == sal.service} />} label={sal.title}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                        <Divider style={{ width: "92%" }} />
                        <FormGroup style={{ marginTop: "1rem" }} onChange={array_change}>
                            <FormLabel style={{ marginBottom: "1rem" }}>Beauty~next~door~Deals</FormLabel>
                            {config["beauty-next-door-deals"].map((sal, key) => {
                                return (
                                    <FormControlLabel key={key}
                                        control={<Checkbox checked={beautydeals.some(s => s == sal.deal)} name="beautydeals" value={sal.deal} />} label={sal.title}
                                    />
                                )
                            })}
                        </FormGroup>
                        <Divider style={{ width: "92%" }} />
                        <FormControl style={{ marginTop: "1rem" }}>
                            <FormLabel style={{ marginBottom: "1rem" }}>Διαθεσιμότητα</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                value={availability}
                                name="radio-buttons-group"
                                onChange={e => setAvailability(e.target.value)}
                            >
                                {[{ title: "Άμεσα", value: 0 }, { title: "Σήμερα", value: 1 }, { title: "no matter", value: 2 }].map((sal, key) => {
                                    return (
                                        <FormControlLabel key={key}
                                            control={<Radio  name="availability" value={sal.value} />} label={sal.title}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {
                        loading ? <LinearProgress style={{ width: "100%", margin: "1rem" }} /> :
                            (
                                <div className='w-100 d-flex f-column pl0'>
                                    <div className='w-100 d-flex al-items-center j-cont-between'>
                                        <h3>{res.total}</h3>
                                        <div>some sort later</div>
                                    </div>
                                    <Divider style={{width: "100%", margin: "1rem 0px"}} />
                                    <div className='salons-primary-section-container p0 w-100'>
                                        {res.data.map((salon, key) => {
                                            return (<Card key={key} salon={salon} />)
                                        })}
                                    </div>
                                </div>
                            )
                    }

                </div>
            </main>
        </div>
    );
};

export default Salons;