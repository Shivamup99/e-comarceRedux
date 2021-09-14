import * as actionTypes from '../constants/productsConstant'
import axios from 'axios'

export const getProducts =()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST});
        const {data} = await axios.get("http://localhost:2000/getPro")
        dispatch({
            type : actionTypes.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getProductDetails =(_id)=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`http://localhost:2000/getProId/${_id}`)
        dispatch({
            type : actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const removeProductDetails = ()=>async(dispatch)=>{
    dispatch({
        type:actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}