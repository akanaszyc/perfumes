import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.scss'
import './variables.scss'
import './assets/components/account'
import './assets/components/register'
import LandingMain from './assets/components/landing'
import RegistrationMain from './assets/components/register'
import Login from './assets/components/login'
import Account from './assets/components/account'
import Mycollection from './assets/components/mycollection'
import SearchNotes from './assets/components/searching'
import Wishlist from './assets/components/wishlist'
import Layout from './assets/components/Layout'
import supabase from './config'

export default function App() {
  useEffect(() => {

    const get = async () => {
      let { data, error } = await supabase
.from('profiles')
.select('*')
console.log(data)
    }
    get()
        
  }, [])
  return(
  
    // <LandingMain></LandingMain>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Account/>}/>
      <Route path='mycollection' element={<Mycollection/>}/>
      <Route path='searching' element={<SearchNotes/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}