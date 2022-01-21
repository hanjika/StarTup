import React, { useState, useEffect } from 'react';

const Api = () => {
    const [api, setApi] = useState({ message: 'Loading...' })

    useEffect(() => {
        const url = 'https://localhost:3000/api/users'
        fetch(url)
            .then(res => res.text())
            .then(res => setApi({ message: res }))
    }, [])

    return (
        <>
            <h1>API</h1>
            <p>{api}</p>
        </>
    )
}

export default Api;
