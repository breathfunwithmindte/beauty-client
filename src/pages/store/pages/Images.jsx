import React from 'react'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Rating from "@mui/material/Rating"
import Icon from "@mui/material/Icon"
import StarIcon from '@mui/icons-material/Star'
import Button from "@mui/material/Button"
import { Image } from '../../../components/General/Image'

export const Images = ({ store }) => {

    return (
        <div className='primary-store-page primary-padding'>
            <h1>Φωτογραφίες καταστήματος</h1>
            <Divider variant="fullWidth" orientation="horizontal" style={{ margin: "1.4rem 0px" }} />
            {/* <h3>Το συγκεκριμένο κατάστημα δεν έχει καμία φωτογραφία.</h3> */}
            <div className='d-flex f-wrap'>
                {store.images && store.images.map(i => {
                    return (<Image imgSrc={i} classname="store-images-img" />)
                })}
            </div>
        </div>
    )
}
