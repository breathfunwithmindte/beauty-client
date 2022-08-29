import React from 'react'
import Divider from '@mui/material/Divider'

export const Review = ({ store }) => {
  return (
    <div className='primary-padding primary-store-page'>
        <h2 className='mb0'>Περιγραφή</h2>
        <pre>{store.description}</pre>
        <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1rem 0px"}} />
        <h2 className='mb0'>Πολική ακύρωσης και άλλες πολιτικές</h2>
        <pre>{store.policy}</pre>
        <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1rem 0px"}} />
        Beauty next door 2022
    </div>
  )
}
