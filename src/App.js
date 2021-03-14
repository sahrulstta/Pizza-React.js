import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom' ;
import { GlobalStyle } from './globalStyle';
import Hero from './component/Navbar/Hero/Index';
import Product from './component/Navbar/Product/Index';
import { productData,productData2 } from './component/Navbar/Product/Data';
import Featur from './component/Navbar/Feature/Index';
import Footer from './component/Navbar/Footer/Index';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Product heading='Chose Your favorite' data={productData}/>
      <Featur/>
      <Product heading='Sweet tears for you' data={productData2}/>
      <Footer/>
    </Router>
  );
}

export default App;
