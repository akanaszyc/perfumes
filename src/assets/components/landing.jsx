import React, { useState } from 'react'
import RegistrationMain from './register'


export default function LandingMain() {
    const [showRegister, setShowRegister] = useState(false);
    const handleClick = () => {
        setShowRegister(true);
    }
    return(
        <div className="main">
            <button className='landingbutton' onClick={handleClick}>GET STARTED</button>
            {showRegister && <RegistrationMain/>}
        </div>
    )
}