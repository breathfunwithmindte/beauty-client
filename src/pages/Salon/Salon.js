import { Button, ButtonGroup, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, LinearProgress, Radio, RadioGroup, Rating } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import config from "../../bssl/config.json"
import Components from '../../components';
import "./css/Salon.css";
import images from '../../images';
import useApiFetch from '../../bssl/useFetchApi';

const Salon = () => {
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
        <div className='salon'>
            <Components.Header />
            <main className='salon-main'>
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
        <div className='salon'>
            <Components.Header />
            <img className='salon--img-website' src={images[current.image]} style={{ width: "calc(100% - 6.9px)", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1 }} />
            <main className='salon-main primary-padding'>
                <img className='salon--img-mobile' src={images[current.image]} style={{ width: "100%", height: "auto" }} />
                <div className='w-100 mb0 primary-padding py0 d-flex j-cont-between' style={{ background: "rgba(255,255,255,0.34)" }}>
                    <div className='d-flex'>
                        <img src={"http://localhost:5000/public/images/0.jpeg"} width={"69px"} height={"69px"} style={{borderRadius: "100%"}} />
                        <div className='pl0'>
                            <h1 className='beauty-font'>{'Some salon for example with index'}</h1>
                            <br />
                            <pre >{'Περιποιηθείτε τα νύχια και το πρόσωπο σας στην Πάτρα. Επισκεφθείτε το χώρο μας και απολαύστε ένα. μοναδικό ταξίδι στον κόσμο της ομορφιάς'}</pre>
                            <div className='salon-rating-mobile'>
                                <Divider style={{width: "92%", margin: "1rem 0px"}} />
                                <div className='d-flex al-items-center' style={{display: "flex"}}>
                                    <Rating name="simple-controlled" value={4} readOnly />
                                    <h2>(4)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='salon-rating-website d-flex al-items-center'><Rating  name="simple-controlled" value={4} readOnly  /><h2>(4)</h2></div>
                </div>
                <nav>
                    <ButtonGroup variant='contained'>
                        <Button color="secondary">Υπηρεσίες</Button>
                        <Button color="primary">Φωτογραφίες από πελάτες</Button>
                        <Button color="primary">Κριτικές</Button>
                        <Button color="primary">Ωράριο</Button>
                    </ButtonGroup>
                </nav>
                <div className='salon-primary-section d-flex bg0 primary-padding pt0'>
                    <div className='salon-primary-section-filters' style={{ overflowY: "auto", maxHeight: "calc(100% - 92px)" , borderRight: "1px solid rgba(0,0,0,0.14)"}}>
                        <FormLabel style={{ marginBottom: "1rem" }} >Καλάθι</FormLabel>
                        <Divider style={{width: "92%", margin: "1.4rem 0"}} />
                        <p>Το καλάθι σας είναι άδιο</p>
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
                                    <h5 style={{color: "var(--clr2)"}}>ΑΠΟΤΡΙΧΩΣΗ</h5>
                                    <div className='salon-primary-section-container p0 w-100'>
                                        {res.data.map((salon, key) => {
                                            return (<div>
                                                <div className='d-flex f-column w-100 mb0' style={{ borderBottom: "1.4px dotted var(--clr2)"}}>
                                                    <div className='d-flex j-cont-between w-100'>
                                                    <strong>Καθαρισμός και σχηματισμός φρυδιών </strong>
                                                    <strong className='d-flex al-items-center j-cont-center'
                                                     style={{borderRadius: "14px", color: "#FFF", background: "var(--pr)", width: 69, height: 34, fontSize: "0.75rem"}}>
                                                        22.23€
                                                        </strong>
                                                    </div>
                                                    <em>Τσιμπιδάκι, κλωστή</em>
                                                </div>    
                                            </div>)
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

export default Salon;