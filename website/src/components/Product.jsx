import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './Product.css'
import {getProductDetails as productDetails} from '../redux/actions/productAction'
import {addToCart as addData} from '../redux/actions/cartActions'
function Product({match,history}) {
  const [qty,setQty] = useState(1)
  const dispatch = useDispatch()
  const getProductDetails = useSelector(state=>state.getProductDetails)
  const {product,loading,error} = getProductDetails

  useEffect(()=>{
    if(product && match.params._id!==product._id){
      dispatch(productDetails(match.params._id))
    }
  },[dispatch,product,match])

  const addToCartHandle =()=>{
    dispatch(addData(product._id,qty))
    history.push('/cart')
  }

    return (
  <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    {loading?(
      <h1>Data loading....</h1>
    ):error?(
      <h2>{error}</h2>
    ):(
      <>
      <div className="col-md-10">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4"> <img id="main-image" src={product && product.image} width={250} /> </div>
              <div className="thumbnail text-center"> <img onclick="change_image(this)" src={product && product.image} width={70} /> <img onclick="change_image(this)" src={product && product.image} width={70} /> </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/" className="d-flex align-items-center"> <i className="fa fa-long-arrow-left" /> <span className="ml-1">Back</span> </Link> 
                <p>{product.rating && product.rating.count>0?'In Stock':'Out of Stock'}</p>
              </div>
              <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product && product.id}</span>
                <h5 className="text-uppercase">{product && product.title}</h5>
                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${product && product.price}</span>
                </div>
              </div>
              <p className="about">{product && product.description}</p>
              <div className="cart mt-4 align-items-center"> 
              <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={addToCartHandle}>Add to cart</button>
              <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                {[...Array(product.rating && product.rating.count).keys()].map((x)=>(
                  <option key={x+1} value={x+1}>{x+1} </option>
                ))}
              </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    )}
    
  </div>
</div>


    )
}

export default Product
