import React, { useState } from 'react';
import Home from './Home';

const LogoutButton = () => {
    const [disconnect, setDisconnect] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        setDisconnect(true);
    }

    if (disconnect) {
        return (
            <Home />
        )
    }

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
