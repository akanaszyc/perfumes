import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import supabase from '../../config';

export default function SearchNotes() {
    const [notes, setNotes] = useState([]);
    
    
    // async function fetchData() {
    //     const { data, error } = await supabase.from('profiles').select('mynotes');
    // const notesArray = data;
      
    //     if (error) {
    //       console.error('Error fetching data:', error);
    //       return;
    //     }
      
    //     console.log('Fetched data:', data);
    //   }
    const handleChange = (e) => {
        setNotes(e.target.value);
    }


    return(
        <div className='main-tab'>
        <div className='tab-header'>
        <div>nick</div>
                    <div className='accont-icon-font'><FontAwesomeIcon icon={faUser} /></div>
        </div>
        <div className='search-request'>
            <p> which notes you are looing for?</p>
            <select className='input-addcol' value={notes} onChange={handleChange} ></select>
            <option value=''></option>
            {/* {notesArray.map((note, index) => (
                <option key={index} value={note}>
                    {note}
                </option> */}
            {/* ))} */}
        </div>
        <div className='search-output'>
            {/* <p>{notes}</p> */}
        </div>
        <div className='tab-header'>
        <div><FontAwesomeIcon icon={faList}/></div>
        <div><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
        <div><FontAwesomeIcon icon={faHeartCirclePlus}/></div>
        </div>
    </div>
    )
}