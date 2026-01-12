const categories = require("../models/category.model")

const getallCategories = (req,res) => {

}

const getCategories = (req,res) => {

}

const addCategories = async (req,res) => {
    try {
        const category = await categories.create(req.body)

        if (!category) {
            return res.status(400).json({data:null,message:"category data not added"})
        }

        return  res.status(200).json({category,message:"category data add succesfully"})

    } catch (error) {
        return res.status(400).json({data:null,message:"internal server error at add category" + error.message})
    }
    console.log(req.body)
    // res.status(200).json({message:"add"})
}

const updateCategories = (req,res) => {

}

const deleteCategories = (req,res) => {

}

module.exports = {
    getallCategories,
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories
}