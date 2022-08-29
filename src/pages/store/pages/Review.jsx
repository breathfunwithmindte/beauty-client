import React from 'react'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Rating from "@mui/material/Rating"

export const Review = ({ store }) => {
  return (
    <div className='primary-padding primary-store-page'>
        <h1>Κριτικές</h1>
        <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1.4rem 0px"}} />
        {
            store.review_list && store.review_list.slice(0, 10).map(r => {
                return (
                    <div className='d-flex al-items-start my0 p0' style={{boxShadow: "0px 1px 6.9px 0.14px var(--h)"}}>
                        <Avatar variant="circular" src="" alt="" sx={{ width: '69px', height: '69px' }} />
                        <div className='px0 d-flex f-column'>
                            <strong>{r.user.username} <span className='muted'> 12 εβδομάδες πριν</span></strong>
                            <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1.4rem 0px"}} />
                            <div className='d-flex al-items-center'>
                                <Rating name="review-store" value={r.rating} readOnly />
                                <h2> ({r.rating})</h2>
                            </div>
                            <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1.4rem 0px"}} />
                            <pre>{r.review}</pre>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
