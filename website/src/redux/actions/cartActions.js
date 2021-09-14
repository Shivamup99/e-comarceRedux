import * as actionTypes from '../constants/cartConstant'
import axios from 'axios'

export const addToCart = (_id,qty) =>async(dispatch,getState)=>{
    const {data} = await axios.get(`http://localhost:2000/getProId/${_id}`);
    dispatch({
        type:actionTypes.ADD_TO_CART,
        payload:{
            _id:data._id,
            id:data.id,
            image:data.image,
            description:data.description,
            title:data.title,
            price:data.price,
            category:data.category,
            count:data.rating.count,
            qty
        }
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart =(_id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:_id
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
}