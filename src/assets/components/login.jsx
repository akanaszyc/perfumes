import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import supabase from '../../config';
import Account from './account';


export default function Login() { 
    const [loginData, setLoginData] = useState({
        nick: '',
        password: '',
    });

    const [error, setError] = useState('')

    const handleLogin = (e) => {
        setLoginData({
            ...loginData,
            [e.target.value]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {user, error } = await supabase.auth.signInWithPassword({
                nick: loginData.nick,
                password: loginData.password,
            })

            if(error) {
                setError(error.message);
            }else{
                console.log('User:', user);
            }
        }catch (eror) { 
            console.error('Error signing in:', error.message);
            setError('Failed to sign in. Please try again');
        }


    }


    return( 
       <div className='main'>
       <div className='registerheader'>LOG IN</div>
       <form className='form' onSubmit={handleSubmit}> 

        <label htmlFor='nick'>nick: </label>
        <input className='input-login' type='text' value={loginData.nick} onChange={(e) => setLoginData(e.target.value)}></input>

        <label htmlFor='password'>password: </label>
        <input className='input-login' type='password' value={loginData.password} onChange={(e) => setLoginData(e.target.value)}></input>

        <button type='submit' className='registrationbutton'>log in</button>
       </form>
       </div>
    )
}