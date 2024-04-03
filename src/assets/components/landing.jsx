import React, { useState } from 'react'
import RegistrationMain from './register'
import Login from './login';


export default function LandingMain() {
    const [showRegister, setShowRegister] = useState(false);
   
    const handleRegisterClick = () => {
        setShowRegister(true);
    }
    const handleLoggingClick = () => {
        setShowRegister(false);
    }
    return(
        <div className="main">
            <button className='landingbutton' onClick={handleRegisterClick}> REGISTER </button>
            <button className='landingbutton' onClick={handleLoggingClick}>LOG IN</button>
            {showRegister ? <RegistrationMain/> : <Login/>}
        </div>
    )
    } 