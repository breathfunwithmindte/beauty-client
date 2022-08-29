import React from 'react'
import Divider from '@mui/material/Divider'

export const Open = () => {
  return (
    <div className='primary-padding primary-store-page'>
        <h1>Ωράριο λειτουργίας</h1>
        <Divider variant="fullWidth" orientation="horizontal" style={{margin: "1.4rem 0px"}} />
        <ul className='store-open-times-ul'>
            <li>
                <p>Δευτέρα: </p>
                <strong> Κλειστό</strong>
            </li>
            <li >
                <p>Τρίτη: </p>
                <strong> 09.00 - 20.00</strong>
            </li>
            <li >
                <p>Τετάρτη: </p>
                <strong> 09.00 - 20.00</strong>
            </li>
            <li >
                <p>Πέμπτη: </p>
                <strong> 09.00 - 20.00</strong>
            </li>
            <li >
                <p>Παρασκευή: </p>
                <strong> 09.00 - 21.00</strong>
            </li>
            <li >
                <p>Σάββατο: </p>
                <strong> 09.00 - 18.00</strong>
            </li>
            <li >
                <p>Κυριακή: </p>
                <strong> 09.00 - 20.00</strong>
            </li>
        </ul>

    </div>
  )
}
