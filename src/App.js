import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Cart from './pages/cart/cart';
import ShopeContextProvider from './context/shopeContext';
import Shop from './pages/shop/shop';



function App() {
  return (

  
   <ShopeContextProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </Router>
   </ShopeContextProvider>
 

  );
}

export default App;
