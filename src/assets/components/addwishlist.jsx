import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function AddWishlist() {

    return(

    <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='wishlist-add-area'>
            <form className='wishlist-add-form'>
                <label htmlFor='name'>name</label>
                <input type='text' name='name' className='input-add-wish'></input>
                <label htmlFor='brand'>brand</label>
                <input type='text' name='brand' className='input-add-wish'></input>
                <label htmlFor='notes'>name</label>
                <input type='text' name='notes' className='input-add-wish'></input>
            </form>
        <button className='add-wishlist-button'>add</button>
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
