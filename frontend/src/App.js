import React from 'react';
import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Copy from './component/footer/copyright'
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import CartScreen from './screens/CartScreen'
import SinginScreen from './screens/SinginScreen'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Route path='/singin' component={SinginScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={SingleProduct}></Route>
      </main>
      <Footer />
      <Copy />
    </div>
    </BrowserRouter>
  );
}

export default App;