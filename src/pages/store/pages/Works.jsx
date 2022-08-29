import React from 'react'
import Divider from '@mui/material/Divider'

export const Works = ({ store }) => {

    return (
        <div className='primary-store-page primary-padding'>
            <h1>Δημιουργήματα | Επιβεβαιωμένες φωτογραφίες από τους πελάτες.</h1>
            <Divider variant="fullWidth" orientation="horizontal" style={{ margin: "1.4rem 0px" }} />
            <h3>Το συγκεκριμένο κατάστημα δεν έχει καμία επιβεβαιωμένη φωτογραφία.</h3>
        </div>
    )
}
