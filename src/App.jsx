import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './assets/Pages/Shop';
import ShopCategory from './assets/Pages/ShopCategory';
import Product from './assets/Pages/Product';
import Cart from './assets/Pages/Cart';
import LoginSignup from './assets/Pages/LoginSignup';

function App() {


  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />

          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
