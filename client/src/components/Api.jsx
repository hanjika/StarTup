import React, { useState, useEffect } from 'react';

const Api = () => {
    const [api, setApi] = useState('')

    async function fetchUrl() {
        fetch('../../../back-end/db/users.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response)
            })
            .then(function (JSON) {
                console.log(JSON)
                setApi(JSON)

            })
    }


    useEffect(() => {
        fetchUrl()
    }, [])

    return (
        <>
            <h1>api</h1>
            <ul>
                {api}
            </ul>
        </>
    )
}

export default Api;
