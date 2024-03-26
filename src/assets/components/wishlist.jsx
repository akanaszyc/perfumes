import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function Wishlist() {

    return(

    <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='wishlist-area'>
        <div className='wishlist-item'>
           <p>name</p>
           <div className='wishlist-icon'>icon</div>
        </div>
        <div className='wishlist-item'>
           <p>name</p>
           <div className='wishlist-icon'>icon</div>
        </div>
        <div className='wishlist-item'>
           <p>name</p>
           <div className='wishlist-icon'>icon</div>
        </div>
        </div>
        <button className='add-wishlist-button'>add</button>
        <div className='tab-header'>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        
        </div>
    </div>
    )
}
