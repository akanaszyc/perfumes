import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'


export default function Wishlist() {

//zaciąganie danych z supabase//
//usuwanie i edytowanie danych//
//po przyciśnięciu add przenoszenie do add item//



    return(
        <div className='main-tab'>
            <div className='tab-header'>
                <p>nick</p>
                <div>icon</div>
            </div>
            <div className='wishlist-area'>
                <div className='wishlist-item'>
                    <div className='wishlist-name'>
                        <p>name</p>
                        <div className='wishlist-icons'>
                            <div>icon</div>
                            <div>icon</div>
                        </div>
                    </div>
                </div> 
                <div className='wishlist-item'>
                    <div className='wishlist-name'>
                        <p>name</p>
                        <div className='wishlist-icons'>
                            <div>icon</div>
                            <div>icon</div>
                        </div>
                    </div>
                </div> 
                <div className='wishlist-item'>
                    <div className='wishlist-name'>
                        <p>name</p>
                        <div className='wishlist-icons'>
                            <div>icon</div>
                            <div>icon</div>
                        </div>
                    </div>
                </div> 
                <button className='add-wishlist'>add</button>
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