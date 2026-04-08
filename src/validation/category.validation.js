const Joi = require("joi")

const addCategorySchema = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    description: Joi.string().required(),
    category_img: Joi.any().optional(),
    parent_category_id: Joi.string().optional()
  })
}

const updateCategorySchema = {
  params: Joi.object().keys({
    id: Joi.string().required().min(24)
  }),
  body: Joi.object().keys({
    name: Joi.string().optional().trim(),
    description: Joi.string().optional(),
    category_img: Joi.any().optional(),
    parent_category_id: Joi.string().optional()
  })
}

const deleteCategorySchema = {
  params: Joi.object().keys({
    id: Joi.string().required().min(24)
  })
}

module.exports = {
  addCategorySchema,
  updateCategorySchema,
  deleteCategorySchema
}