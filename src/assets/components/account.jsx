import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import supabase from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


export default function Account() {
    const [accountData, setAccountData] = useState({
        nick:'',
        email: '',
        password: '',
        mynotes: '',
    });
    const [isEdited, setIsEdited] = useState(false);

    const handleEditClick = () => {
        setIsEdited(true);
    }

    const handleSaveClick = async () => {
        try {
        
            const { data, error } = await supabase.from('profiles').insert([
                {
                    nick: accountData.nick,
                    email: accountData.email,
                    password: accountData.password,
                    mynotes: accountData.mynotes,
                }
            ])
            
            if (error) {
                throw error;
            }

            
            setAccountData(data);

            
            setIsEdited(false);
        } catch (error) {
            console.error('Error updating account data:', error.message);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAccountData({
            ...accountData,
            [name]: value,
        })
        // async function signOut() {
        //     const { error } = await supabase.auth.signOut()
        //   }
    }

    return( 
        <div>
            {isEdited ? (
                <div className='main-tab'>
                    <div className='tab-header'>
                        <div>nick</div>
                    <div className='accont-icon-font'><FontAwesomeIcon icon={faUser} /></div>
                    </div>
                    <div className='form'>
                        <label htmlFor='nick'>nick</label>
                        <input type='text' name='nick' className='input' value={accountData.nick} onChange={handleChange}></input>
                        <label htmlFor='email'>email</label>
                        <input type='text' name='email' className='input' value={accountData.email} onChange={handleChange}></input>
                        <label htmlFor='password'>password</label>
                        <input type='password' name='password' className='input' value={accountData.password} onChange={handleChange}></input>
                        <label htmlFor='mynotes'>notes</label>
                        <input type='text' name='mynotes' className='input' value={accountData.mynotes} onChange={handleChange}></input>
                        <button className='button-edit' onClick={handleSaveClick}>SAVE</button>
                    </div>
                    <div className='tab-header'>
                        <div><FontAwesomeIcon icon={faList}/></div>
                        <div><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <div><FontAwesomeIcon icon={faHeartCirclePlus}/></div>
                    </div>
                </div>
            ) : (
                <div className='main-tab'>
                    <div className='tab-header'>
                    <div>nick</div>
                    <div className='accont-icon-font'><FontAwesomeIcon icon={faUser} /></div>
                    </div>
                    <div className='account-data'>
                        <p>nick: {accountData.nick}</p>
                        <p>email: {accountData.email}</p>
                        <p>password: {accountData.password}</p>
                        <p>my notes: {accountData.mynotes}</p>
                        <button className='button-edit' onClick={handleEditClick}> edit your account</button>
                        <button className='button-edit'> log out</button>
                    </div>
                    <div className='tab-header'>
                        <div><FontAwesomeIcon icon={faList}/></div>
                        <div><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <div><FontAwesomeIcon icon={faHeartCirclePlus}/></div>
                    </div>
                </div>
            )}
        </div>
    )
}




// export default function Account() {
//     const [accountData, setAccountData] = useState({
//         nick:'',
//         email: '',
//         password: '',
//         mynotes: '',
//     });
//     const [isEdited, setIsEdited] = useState(false);

//     //pobranie danych z supabase i wstawienie ich do statu//
//     //jeśli isEdited=true, widok zmienia się na input a button na submit//
//     //updatowanie danych i zmiana danych w supabase//
//     //routing na iconach aby przechodzić do innych okien//


//     return( 
//        <div className='main-tab'>
//         <div className='tab-header'>
//             <p>nick</p>
//             <div>icon</div>
//         </div>
//         <div className='account-data'>
//             <p>nick:</p>
//             <p>email:</p>
//             <p>password:</p>
//             <p>my notes:</p>
//             <button className='button-edit'> edit your account</button>
//         </div>
//         <div className='tab-header'>
//             <div>icon</div>
//             <div>icon</div>
//             <div>icon</div>
            
//         </div>
//        </div>
//     )
// }