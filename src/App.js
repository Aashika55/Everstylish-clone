import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    
    <div className='m-0 p-0'>
    <Header />
    
    <Navbar />
    
    
    <Footer />
      
    </div>
    
  )
}

export default App

