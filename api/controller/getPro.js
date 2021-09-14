const Product = require('../model/store')

const getProducts =async(req,res)=>{
    try {
        const pro = await Product.find()
        res.status(200).json(pro)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getProguctById = async(req,res)=>{
    try {
        let pro = await Product.findById({_id:req.params._id})
        res.status(200).json(pro)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getProducts,getProguctById}
