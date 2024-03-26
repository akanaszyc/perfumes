import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function SearchNotes() {
    //wstawienie do select wszystkich zapisanych nut//
    //wyrzucanie w output perfumy z wybranymi nutami//
    //routing na iconach//


    return(
        <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='search-request'>
            <p> which notes you are looing for?</p>
            <select className='input-addcol'></select>
            <option></option>
        </div>
        <div className='search-output'>
            <p>output</p>
        </div>
        <div className='tab-header'>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        </div>
    </div>
    )
}