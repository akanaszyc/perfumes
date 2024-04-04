import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function SearchNotes() {
    
    // async function fetchData() {
    //     const { data, error } = await supabase.from('profiles').select('*');
      
    //     if (error) {
    //       console.error('Error fetching data:', error);
    //       return;
    //     }
      
    //     console.log('Fetched data:', data);
    //   }


    return(
        <div className='main-tab'>
        <div className='tab-header'>
        <div>nick</div>
                    <div className='accont-icon-font'><FontAwesomeIcon icon={faUser} /></div>
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
        <div><FontAwesomeIcon icon={faList}/></div>
        <div><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
        <div><FontAwesomeIcon icon={faHeartCirclePlus}/></div>
        </div>
    </div>
    )
}