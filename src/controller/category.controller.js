const categories = require("../models/category.model")
const fs = require("fs")

const getallCategories = async (req, res) => {
    try {
        const category = await categories.find()

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

        console.log(req.file, req.body,req.user)

        const category = await categories.create({ ...req.body, category_img: req.file.path })

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
    try {

        const categorydata = await categories.findById(req.params.id);

        let updatedata = { ...req.body }

        if (req.file) {
            fs.unlink(categorydata.category_img, (error) => {
                console.log(error)
            })

            updatedata.category_img = req.file.path
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
        const category = await categories.findByIdAndDelete(req.params.id)

        if (!category) {
            return res.status(400).json({ data: null, message: "category not delete" })
        }

        fs.unlink(category.category_img, (error) => {
            console.log(error)
        })

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