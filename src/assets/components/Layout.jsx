import {Outlet, Link} from 'react-router-dom';


const Layout = () => {
    return(
        <>

            <ul className='routes'>
                <li>
                    <Link to='/' className='account-icon'>Account</Link>
                </li>
                <li>
                    <Link to='/mycollection' className='collection-icon'>My collection</Link>
                </li>
                <li>
                    <Link to='/searching' className='searching-icon'>Search notes</Link>
                </li>
                <li>
                    <Link to='/wishlist' className='wishlist-icon'>Wishlist</Link>
                </li>
            </ul>
        
        <Outlet/>
        </>
    )
};

export default Layout;