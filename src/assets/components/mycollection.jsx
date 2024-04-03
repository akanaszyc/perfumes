import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function Mycollection() {
    const [collectionItems, setCollectionItems] = useState([]);
    const [adding, setAdding] = useState(false);

    const handleAddClick = () => {
        setAdding(true);
    }

    const handleSaveClick = () => {
        setAdding(false);
        // Add the new collection item to the collectionItems array
        setCollectionItems([...collectionItems, collectionItem]);
        // Clear the input fields after saving
        setCollectionItem({
            name: '',
            house: '',
            notes:'',
            type: '',
            points: '',
            when:'',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollectionItem({
            ...collectionItem,
            [name]: value,
        });
    }

    const [collectionItem, setCollectionItem] = useState({
        name: '',
        house: '',
        notes:'',
        type: '',
        points: '',
        when:'',
    });

    return(
        <div>
            {adding ? (
                <div className='main-tab'>
                <div className='tab-header'>
                <div>nick</div>
                    <div className='accont-icon-font'><FontAwesomeIcon icon={faUser} /></div>
                </div>
                <div className='add-collection-area'>
                    <form className='add-collection-form'>
                        <label htmlFor='name'>name</label>
                        <input type='text' name='name' className='input-addcol' value={collectionItem.name} onChange={handleChange}></input>
                        <label htmlFor='house'>house</label>
                        <input type='text' name='house' className='input-addcol' value={collectionItem.house} onChange={handleChange}></input>
                        <label htmlFor='notes'>notes</label>
                        <input type='text' name='notes' className='input-addcol' value={collectionItem.notes} onChange={handleChange}></input>
                        <label htmlFor='type'>type</label>
                        <select className='input-addcol' name ='type' value={collectionItem.type} onChange={handleChange}>
                            <option>floral</option>
                            <option>woody</option>
                            <option>fruity</option>
                            <option>fresh</option>
                            <option>smokey</option>
                            <option>sweet</option>
                            <option>watery</option>
                        </select>
                        <label htmlFor='points'>points</label>
                        <select className='input-addcol' name='points' value={collectionItem.points} onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <label htmlFor='when'>when to wear</label>
                        <input type='text' name='when' className='input-addcol' value={collectionItem.when} onChange={handleChange}></input>
                        <button className='add-collection-button' onClick={handleSaveClick}>add</button>
                    </form>
                    
                    
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
                <div className='collection-area'>
                    {collectionItems.map((item, index) => (
                        <div className='collection-item' key={index}>
                            <div className='collection-name'>
                                <p>{item.name}</p>
                                <div className='collection-icons'>
                                    <div><FontAwesomeIcon icon={faTrash}/></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className='add-collection' onClick={handleAddClick}>add</button>
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
