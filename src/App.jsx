import { useEffect, useState } from 'react'
import './App.css';
import Productcontainer from './components/Product-container';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cartpage from './components/Cart-page';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/productDetail/:id' element={<ProductDetail/>} />
           <Route path="/" element={<Productcontainer/>}  />
           <Route path='/cart' element={<Cartpage/>} />
       </Routes>
    </BrowserRouter>

  )
}

export default App
