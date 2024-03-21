import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'


export default function Account() {
    const [accountData, setAccountData] = useState({
        nick:'',
        email: '',
        password: '',
        mynotes: '',
    });
    const [isEdited, setIsEdited] = useState(false);

    //pobranie danych z supabase i wstawienie ich do statu//
    //jeśli isEdited=true, widok zmienia się na input a button na submit//
    //updatowanie danych i zmiana danych w supabase//


    return( 
       <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='account-data'>
            <p>nick:</p>
            <p>email:</p>
            <p>password:</p>
            <p>my notes:</p>
            <button className='button-edit'> edit your account</button>
        </div>
        <div className='tab-header'>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
        </div>
       </div>
    )
}