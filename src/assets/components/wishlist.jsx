import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [adding, setAdding] = useState(false);

    const handleAddClick = () => {
        setAdding(true);
    }

    const handleSaveClick = () => {
        setAdding(false);
        setWishlistItems([...wishlistItems, wishlistItem]);
        setWishlistItem({
            name: '',
            brand: '',
            notes: '',
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setWishlistItem({
            ...wishlistItem,
            [name]: value,
        });
    }

    const [wishlistItem, setWishlistItem] = useState({
        name: '',
        brand: '',
        notes: '',
    })

    return(

    <div>
        {adding ? (
            <div className='main-tab'>
            <div className='tab-header'>
                <p>nick</p>
                <div>icon</div>
            </div>
            <div className='wishlist-add-area'>
                <form className='wishlist-add-form'>
                    <label htmlFor='name'>name</label>
                    <input type='text' name='name' className='input-add-wish' value={wishlistItem.name} onChange={handleChange}></input>
                    <label htmlFor='brand'>brand</label>
                    <input type='text' name='brand' className='input-add-wish' value={wishlistItem.brand} onChange={handleChange}></input>
                    <label htmlFor='notes'>notes</label>
                    <input type='text' name='notes' className='input-add-wish' valuen={wishlistItem.notes} onChange={handleChange}></input>
                </form>
            <button className='add-wishlist-button' onClick={handleSaveClick}>add</button>
            </div>
            <div className='tab-header'>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            </div>
        </div>

        ) : (
            <div className='main-tab'>
            <div className='tab-header'>
                <p>nick</p>
                <div>icon</div>
            </div>
            <div className='wishlist-add-area'>
                {wishlistItems.map((item, index) => (
                    <div className='collection-item' key={index}>
                        <div className='collection-name'>
                            <p>{item.name}</p>
                            <div className='collection-icons'>
                                <div>icon</div>
                                <div>icon</div>
                            </div>
                        </div>
                    </div>
                ))}
                <button className='add-collection' onClick={handleAddClick}>add</button>
            </div>
            <div className='tab-header'>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            </div>
        </div>

        )}
    </div>
)
}