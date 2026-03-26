const categories = require("../models/category.model")
const fs = require("fs");
const { cloudinaryupload, cloudinarydelete } = require("../service/cloudinary");

const getallCategories = async (req, res) => {
    try {
        const category = await categories.find()

        console.log(category);


        if (!category) {
            return res.status(400).json({ data: [], message: "all category data not fetch" })
        }

        return res.status(200).json({ data: category, message: "all category data fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get all category" + error.message })
    }
}

const getCategories = async (req, res) => {
    try {
        console.log(req.params.id);

        const category = await categories.findById(req.params.id)

        if (!category) {
            return res.status(400).json({ data: [], message: "all category data not fetch" })
        }

        return res.status(200).json({ data: category, message: "category data fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get category" + error.message })
    }
}

const getparentCategories = async (req, res) => {
    try {
        const category = await categories.aggregate([
            {
                $match: {
                    parent_category_id: null
                }
            }
        ])

        if (!category) {
            return res.status(400).json({ data: [], message: "all category data not fetch" })
        }

        return res.status(200).json({ data: category, message: "active category data fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get active  category" + error.message })
    }
}

const activeCategories = async (req, res) => {
    try {
        const category = await categories.aggregate([
            {
                $match: {
                    isactive: true
                }
            },
            {
                $count: "active categories"
            }
        ])

        if (!category) {
            return res.status(400).json({ data: [], message: "all category data not fetch" })
        }

        return res.status(200).json({ data: category, message: "active category data fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get active  category" + error.message })
    }
}

const addCategories = async (req, res) => {
    try {

        console.log("cat", req.body)

        const obj = await cloudinaryupload(req.file.path, "category")

        const category = await categories.create({ ...req.body, category_img: { public_id: obj.public_id, url: obj.url } })



        if (!category) {
            return res.status(400).json({ data: null, message: "category data not added" })
        }

        return res.status(200).json({ data: category, message: "category data add succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add category" + error.message })
    }
    console.log(req.body)
    // res.status(200).json({message:"add"})
}

const updateCategories = async (req, res) => {
    console.log("body",req.body)
    try {

        const categorydata = await categories.findById(req.params.id);

        let updatedata = { ...req.body,category_img:{public_id:categorydata.category_img.public_id,url:categorydata.category_img.url} }

        if (req.file) {
            // fs.unlink(categorydata.category_img, (error) => {
            //     console.log(error)
            // })
            await cloudinarydelete(categorydata.category_img.public_id);

            const obj = await cloudinaryupload(req.file.path, "category");

            updatedata.category_img = {public_id:obj.public_id,url:obj.url}
        }

        const category = await categories.findByIdAndUpdate(
            req.params.id,
            updatedata,
            { new: true, runValidators: true }
        )

        if (!category) {
            return res.status(400).json({ data: null, message: "category not updated" })
        }

        return res.status(200).json({ data: category, message: "category updated succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at update category" + error.message })
    }
}

const deleteCategories = async (req, res) => {
    try {
        const category = await categories.findByIdAndDelete(req.params.id);

        await cloudinarydelete(category.category_img.public_id);

        if (!category) {
            return res.status(400).json({ data: null, message: "category not delete" })
        }

        // fs.unlink(category.category_img, (error) => {
        //     console.log(error)
        // })

        return res.status(200).json({ data: category, message: "category delete succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at delete category" + error.message })
    }
}

module.exports = {
    getallCategories,
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories,
    activeCategories,
    getparentCategories
}