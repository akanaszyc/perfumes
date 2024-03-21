import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function Loggedin() {


return(
    <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='account-functions'>
            <button className='account-function'>my collection</button>
            <button className='account-function'>search notes</button>
            <button className='account-function'>wishlist</button>
        </div>

    </div>
)

}