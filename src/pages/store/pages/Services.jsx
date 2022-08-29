import React from 'react'
import TextField from '@mui/material/TextField'
import useMediaQuery from "@mui/material/useMediaQuery"
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'

export const Services = ({ store }) => {
    const is_mobile = useMediaQuery("(max-width: 693px)")

    return (
        <div className='primary-store-page primary-padding'>
            {/* services pages are splitted to services and cart; */}
            <div className='w-100 d-flex j-cont-between'>
                <div className='w-100' style={{ maxWidth: "693px" }}>
                    <TextField
                        fullWidth
                        id="store-services-search"
                        label="search"
                        variant='filled'
                        onChange={() => { }}
                    />
                    {store.categories && store.categories.map((ctgr, key) => {
                        return (
                            <div className='py0'>
                                <h3 className='muted'>{ctgr}</h3>
                                <div className='w-100 mt0' style={{borderLeft: "1px solid var(--h)", borderRadius: "14px"}}>
                                    {store.products && store.products.filter(f => f.category == ctgr).map((product, index) => {
                                        return (
                                            <div className='w-100 p0'>
                                                <div className='d-flex j-cont-between w-100'>
                                                    <div style={{ maxWidth: "84%" }}>
                                                        <strong>{product.title} <span className='muted'> {product.time_required}</span></strong><br />
                                                        <em className='muted'>{product.description}</em>
                                                    </div>
                                                    <div>
                                                        <Switch onChange={() => { }} inputProps={{ "aria-label": '' }} />
                                                    </div>
                                                </div>
                                                <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1rem 0px"}} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='p0' style={{width: "50%", maxWidth: 369, height: 300, background: "var(--bg1)"}}>
                    <h3>Το καλάθι</h3>
                    <p className='muted'>Επιλεγμένες υπηρεσίες</p>
                    <Divider fullWidth style={{margin: "1rem 0px"}} />
                    <h2 className='muted'>Το καλάθι σας είναι άδιο για αυτό το κατάστημα.</h2>
                </div>
            </div>
        </div>
    )
}
