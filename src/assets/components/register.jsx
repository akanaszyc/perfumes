import React, { useState } from 'react'
import supabase from '../../config';

export default function RegistrationMain() {
    const [userData, setUserData] = useState({
        id: '',
        nick: '',
        email: '',
        password: '',
        repeatpassword: '',
        notes: '',
    });
    const [errors, setErrors] = useState({});

    const handleUserChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    const validateForm = () => {
        const errors = {};
        if(!userData.nick.trim()){
            errors.nick = 'Nick is required';
        }
        if(!userData.email.trim()){
            errors.email = 'Email is required';
        }else if(!isValidEmail(userData.email)){
            errors.email = 'Invalid email address';
        }
        if(!userData.password.trim()){
            errors.password = 'Password is required';
        }else if(userData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if(userData.repeatpassword !== userData.password) {
            errors.repeatpassword = 'Passwords do not match';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

       if(validateForm()) {
        try{
            const { data, error } = await supabase.from('profiles').insert([
                {
                    id: userData.id,
                    nick: userData.nick,
                    email: userData.email,
                    password: userData.password,
                    notes: userData.notes
                }
            ]);
            if(error) {
                throw error;
            }
            console.log('Added to database', data);
            setUserData({
                nick: '',
                email: '',
                password: '',
                notes: '',
            });
        }catch (error) {
            console.error('Error adding data to database', error);
        }
    };

       }


    return(
        <>
    
       <div className='main'>
        <div className='registerheader'>REGISTER</div>
       <form className='form' onSubmit={handleFormSubmit}>
        <label htmlFor='nick'>nick</label>
        <input className='input' type='text' id='nick' name='nick' value={userData.nick} onChange={handleUserChange}></input>
        {errors.nick && <div className='error'>{errors.nick}</div>}

        <label htmlFor='email'>email</label>
        <input className='input'type='email' id='email' name='email' value={userData.email} onChange={handleUserChange}></input>
        {errors.email && <div className='error'>{errors.email}</div>}

        <label htmlFor='password'>password</label>
        <input className='input' type='password' id='password' name='password' value={userData.password} onChange={handleUserChange}></input>
        {errors.password && <div className='error'>{errors.password}</div>}

        <label htmlFor='repeatpassword'>repeat password</label>
        <input className='input' type='password' id='repeatpassword' name='repeatpassword' value={userData.repeatpassword} onChange={handleUserChange}></input>
        {errors.repeatpassword && <div className='error'>{errors.repeatpassword}</div>}

        <label htmlFor='notes'>tell us your favourite notes</label>
        <input className='inputtext' type='textarea' id='notes' name='notes' value={userData.notes} onChange={handleUserChange}></input>
        
        <button type='submit' className='registrationbutton'onClick={handleFormSubmit}>LET'S GO</button>
        </form>
        
       </div>
        </>
    )
}




