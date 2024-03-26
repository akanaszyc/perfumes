import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function AddToCollection() {

    //zapisywanie danych z inputów do supabase//
    //routing na iconach//

    return(
        <div className='main-tab'>
        <div className='tab-header'>
            <p>nick</p>
            <div>icon</div>
        </div>
        <div className='add-collection-area'>
            <form className='add-collection-form'>
                <label htmlFor='name'>name</label>
                <input type='text' name='name' className='input-addcol'></input>
                <label htmlFor='house'>house</label>
                <input type='text' name='house' className='input-addcol'></input>
                <label htmlFor='notes'>notes</label>
                <input type='text' name='notes' className='input-addcol'></input>
                <label htmlFor='type'>type</label>
                <select className='input-addcol'name ='type'>
                    <option>floral</option>
                    <option>woody</option>
                    <option>fruity</option>
                    <option>fresh</option>
                    <option>smokey</option>
                    <option>sweet</option>
                    <option>watery</option>
                </select>
                <label htmlFor='points'>points</label>
                <select className='input-addcol' name='points'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label htmlFor='when'>when to wear</label>
                <input type='text' name='when' className='input-addcol'></input>
                <button className='add-collection-button'>add</button>
            </form>
            
            
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