import React, { useState } from 'react'

import './App.scss'
import './variables.scss'
import './assets/components/account'
// import './assets/components/addwishlist'
// import './assets/components/landing'
// import './assets/components/loggedin'
// import './assets/components/login'
// import './assets/components/mycollection'
import './assets/components/register'
// import './assets/components/searching'
// import './assets/components/wishlist'
// import { createClient } from "@supabase/supabase-js";
import LandingMain from './assets/components/landing'
import RegistrationMain from './assets/components/register'
import Login from './assets/components/login'
import Loggedin from './assets/components/loggedin'
import Account from './assets/components/account'
import Wishlist from './assets/components/wishlist'
// const supabaseUrl = 'https://mcfzyulkphxtclohghgu.supabase.co';
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  return(
    <>
    <Wishlist/>
    </>
  )
}