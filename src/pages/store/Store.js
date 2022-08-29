import { useMediaQuery, TextField, Divider, Rating, ButtonGroup, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams, useLocation, useNavigate, Routes, Route } from 'react-router';
import useApiFetch from '../../bssl/useFetchApi'
import FetchError from '../../components/General/FetchError'
import { Image } from '../../components/General/Image';
import Header from '../../components/Header/Header'
import "./css/Store.css"
import { Employer } from './pages/Employer';
import { Images } from './pages/Images';
import { Info } from './pages/Info';
import { Open } from './pages/Open';
import { Review } from './pages/Review';
import { Services } from './pages/Services';
import { Works } from './pages/Works';

const Nana = () => <div style={{width: 500, height: 500, background:  "red"}}>nasdnasidjasijdiasd</div>

const StoreCardComponent = ({ store }) => (<div className='store-upper-section-card p0 bg0'>
    <h2>{store.title}</h2>
    <p className='muted mt2'>{store.location_address}</p>
    <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1rem 0px"}} />
    <div className='d-flex al-items-center'>
        <Rating name="simple-controlled" value={store.review} readOnly />
        (<strong>{store.total_reviews}</strong>)
    </div>
</div>)

export default function Store () {
    const [res, loading, error, refetch] = useApiFetch("stores/asdasd");
    const is_mobile = useMediaQuery("(max-width: 693px)");
    const { id } = useParams(); // path parameters;
    const navigate = useNavigate(); // navigate;
    const n = useLocation(); // query parameters;
    
    console.log(n)

    useEffect(() => {
    
    }, []);

  return (
    <div>
        <Header />
        <FetchError data={res} error={error} loading={loading}>
            {
                res && (
                    <main className='main'>
                        <section className='store-upper-section'>
                            <div className='store-img-cover-wrapper d-flex al-items-center'>
                                <Image imgSrc={res.document.cover} classname={"store-img-cover"} />
                            </div>
                            <StoreCardComponent store={res.document} />
                        </section>
                        <nav className='primary-padding store-nav'>
                            <ButtonGroup variant="text" color="primary" aria-label="single store" style={{flexWrap: "wrap"}} >
                              {[
                                {label: "Υπηρεσίες", name: "services"},
                                {label: "Ωράριο", name: "open"},
                                {label: "Κριτικές", name: "reviews"},
                                {label: "Προσωπικό", name: "employers"},
                                {label: "Φωτογραφίες", name: "fotos"},
                                {label: "Δημιουργήματα", name: "works"},
                                {label: "Πληροφορίες", name: "info"}
                              ].map((elm, key) => ( <Button variant={n.pathname.endsWith(elm.name) ? "outlined" : "text"} onClick={() => navigate(`/s/${id}/${elm.name}`)} key={key}>{elm.label}</Button>))}
                            </ButtonGroup>
                        </nav>
                        <Routes>
                            <Route path={"/services"} element={<Services store={res.document} />} />
                            <Route path={"/open"} element={<Open store={res.document}  />} />
                            <Route path={"/reviews"} element={<Review store={res.document} />} />
                            <Route path={"/employers"} element={<Employer store={res.document} />} />
                            <Route path={"/fotos"} element={<Images store={res.document} />} />
                            <Route path={"/works"} element={<Works store={res.document} />} />
                            <Route path={"/info"} element={<Info store={res.document} />} />
                            <Route path={"/*"} element={<div className='primary-padding primary-store-page'><h1>Page not found || 404</h1></div>} />
                        </Routes>
                        {/* {JSON.stringify(res)} */}
                    </main>
                )
            }
        </FetchError>
    </div>
  )
}

