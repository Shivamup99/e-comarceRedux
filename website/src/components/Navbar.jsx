import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useSelector } from 'react-redux';
function Navbar() {
  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart
  const cartCount =()=>{
    return cartItems.reduce((qty,item)=>qty + Number(item.qty),0)
  }
    return (
 <div>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand text-white" to="/"><LocalMallIcon style={{marginRight:2,fontSize:'30px',color:'brown',marginBottom:'6px'}}/> My Store</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="nvbCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item pl-1">
            <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-fw mr-1" />Home</NavLink>
          </li>
          <li className="nav-item pl-1">
            <a className="nav-link" href="#"><i className="fa fa-th-list fa-fw mr-1" />Blog</a>
          </li>
          <li className="nav-item pl-1">
            <NavLink className="nav-link" to="/login"><i className="fa fa-sign-in fa-fw mr-1" />Sign in</NavLink>
          </li>
          <li className="nav-item pl-1 ml-5">
            <NavLink className="nav-link" to="/cart"> <span class="badge badge-info">{cartCount()}</span><i className="fa fa-shopping-cart fa-fw mr-1" />Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*# Navbar #*/}
  {/*- Footer -*/}
  
</div>
    )
}

export default Navbar
