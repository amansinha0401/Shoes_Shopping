import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/404';
import ProductDetail from './Pages/ProductDetail';
import Nav from '../src/Components/Nav/Nav';
import Cart from './Components/Cart';
import Test from './Components/Test';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<HomePage />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/cart/:ide' element={<Cart />} />
      <Route path='/Test' element={<Test />} />
      <Route path='*' element={<NotFound />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
