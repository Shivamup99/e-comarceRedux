import React, { useEffect } from 'react'
import './Dashboard.css'
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts as listProducts} from '../redux/actions/productAction'

function Dashboard() {
  const dispatch = useDispatch()
  const getProducts = useSelector(state=>state.getProducts)
  const {products,loading,error} = getProducts

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
    
  return (
    <div className="container">
    <div className="gallery">
    {loading ?<h2>Loding data....</h2>: products.map((product,i)=>(
     <div className="content" key={i}>
     <img src={product.image} alt="djd"/>
     <h3>{product.id}</h3>
     <Link to={`/product/${product._id}`} className="pro-view">View Product</Link>
     <h6>$ {product.price}</h6>
     <ul>
       <li><i className="fa fa-star" aria-hidden="true" /></li>
       <li><i className="fa fa-star" aria-hidden="true" /></li>
       <li><i className="fa fa-star" aria-hidden="true" /></li>
       <li><i className="fa fa-star" aria-hidden="true" /></li>
       <li><i className="fa fa-star" aria-hidden="true" /></li>
     </ul>
     <Link to="/cart/:_id" className="btn btn-info buy-1">Buy Now</Link>
   </div>
  ))}
  
  
  
  {/* <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7BkUIHOZfUXxtwPwZeU_uENUmDSuzsnBA&usqp=CAU" alt="djd"/>
    <h3>Shoes</h3>
    <Link to="/product" className="pro-view">View Product</Link>
    <h6>$100.00</h6>
    <ul>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
      <li><i className="fa fa-star" aria-hidden="true" /></li>
    </ul>
    <Link to="/cart" className="btn btn-info buy-1">Buy Now</Link>
  </div> */}
</div>
</div>
   
    )
}

export default Dashboard
