import React, { use } from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login } from './store/authSlice';
import { logout } from './store/authSlice';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {

  const [loading,setLoading]=React.useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({ userData }));
    }
    else
    {
      dispatch(logout());
    }
  })
  .finally(() => setLoading(false));
}, []);

  return !loading && (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        
        <Footer />
      </div>
    </div>
  )
}

export default App