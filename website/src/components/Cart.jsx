import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import './Cart.css'
function Cart() {
    const history = useHistory()
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const{cartItems} = cart

    const removeFromCartData =(_id)=>{
        dispatch(removeFromCart(_id))
    }

    const countData =()=>{
        return cartItems.reduce((qty,item)=>Number(item.qty) + qty,0)
    }

    const getTotal =()=>{
        return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0)
    }
    const checkout=()=>{
        history.push('/checkout')
    }
    return (
    <div className="container carts">
          {cartItems.length===0 ?(
          <div>Your cart is empty <Link to="/">Go back to shop buy the products</Link></div>
      ):(
       <div className="cards">
       <div className="row">
        <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4><b>Shopping Cart</b></h4>
            </div>
            <div className="col align-self-center text-right text-muted">{countData()} items</div>
          </div>
        </div>
        {cartItems.map((item,i)=>(
            <div className="row border-top border-bottom" key={i}>
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid imgs" src={item && item.image} /></div>
              <div className="col">
                <div className="row text-muted">{item && item.id}</div>
                <div className="row">{item && item.category}</div>
              </div>
              <div className="col">${item && item.price} 
              <spam className="close" onClick={()=>removeFromCartData(item && item._id)}>✕</spam>
              </div>
            </div>
          </div>
        ))}
       
        </div>
      

<div className="col-md-4 summary">
      <div>
        <h5><b>Summary</b></h5>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{paddingLeft: 0}}>ITEMS {countData()}</div>
        <div className="col text-right">$ {getTotal()}</div>
      </div>
     <button className="btn" onClick={checkout}>CHECKOUT</button>
    </div>
  </div>
</div>
)}
</div>
 

    )
}

export default Cart
