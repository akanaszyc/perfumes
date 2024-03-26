import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function CollectionItem() {

    return(
        <div className='main-tab'>
            <div className='tab-header'>
                <p>nick</p>
                <div>icon</div>
            </div>
            <div className='collection-area'>
                <div className='collection-item'>
                    <div className='collection-name'>
                        <p>name</p>
                        <p>house</p>
                        <p>notes</p>
                        <p>type</p>
                        <p>points</p>
                        <p>when to wear</p>
                        <button className='button-edit-item'>edit</button>
                    </div>
                </div>
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