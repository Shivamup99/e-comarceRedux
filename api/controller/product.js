const Product = require('../model/store')
const products = require('../controller/productData')

const data = async()=>{
    try {
        await Product.deleteMany({})
       const product = await Product.insertMany(products)
       //process.exit()
        console.log(product)
    } catch (error) {
        console.log(error)
    }
}

module.exports = data


