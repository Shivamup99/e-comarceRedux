import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Login from './components/Login';
import Check from './components/Check';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/product/:_id" exact component={Product}/>
      <Route path="/checkout" exact component={Check}/>
      <Route path="/login" exact component={Login}/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
