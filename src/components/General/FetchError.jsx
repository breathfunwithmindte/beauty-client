import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'

function FetchError({error, data, loading, children}) {

    if(loading) return <LinearProgress style={{width: "100%"}} />
    if(error) return (<div>
        <h1>Something went wrong || 500</h1>
        <em>{JSON.stringify(error)}</em>
    </div>)
    return children
}

export default FetchError
