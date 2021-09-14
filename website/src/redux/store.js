import {combineReducers, createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReadReducer';

const reducer = combineReducers({
    cart:cartReducer,
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer
})

const middleware = [thunk]

const store = createStore(
    reducer , composeWithDevTools(
        applyMiddleware(...middleware)
      )
)

export default store

