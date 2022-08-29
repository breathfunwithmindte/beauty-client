import React from 'react'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Rating from "@mui/material/Rating"
import Icon from "@mui/material/Icon"
import StarIcon from '@mui/icons-material/Star'
import Button from "@mui/material/Button"

export const Employer = ({ store }) => {


    return (
        <div className='primary-store-page primary-padding'>
            <h1>Προσωπικό</h1>
            <Divider variant="fullWidth" orientation="horizontal" style={{ margin: "1.4rem 0px" }} />
            {
                store.employers && store.employers.map(u => {
                    return (
                        <div className='d-flex al-items-start my0 p0' style={{ boxShadow: "0px 1px 6.9px 0.14px var(--h)" }}>
                            <Avatar variant="circular" src="" alt="" sx={{ width: '69px', height: '69px' }} />
                            <div className='px0 d-flex f-column'>
                                <strong>{u.username} <span style={{color: "green"}}> - {u.experience} χρόνια εμπειρίας στο χώρο</span></strong>
                                <p className='muted pt0'>{u.services.join(",")}</p>
                                <div className='d-flex al-items-center py0'>
                                    <Rating name="review-store" value={u.rating} readOnly />
                                    <h2> ({u.rating})</h2>
                                </div>
                                <div className='d-flex al-items-center'>
                                    <Icon style={{padding: "0px"}}><StarIcon /></Icon>
                                    <strong className='ml1' style={{color: "red"}}>{u.followers} <span className='muted'>ακόλουθοι</span></strong>
                                    <Button variant='outlined' style={{marginLeft: "1rem"}}>Δες το προφίλ</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
