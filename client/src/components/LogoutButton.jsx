import React, { useState } from 'react';
import Home from './Home';

const LogoutButton = () => {
    const [disconnect, setDisconnect] = useState(false)

    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        setDisconnect(true)
    }

    if (disconnect) {
        return (
            <Home />
        )
    }


    return (
        <>
            <form onSubmit={handleLogoutSubmit}>
                <button> logout </button>
            </form>
        </>
    )
}

export default LogoutButton;
