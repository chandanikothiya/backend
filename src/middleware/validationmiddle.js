const Joi = require("joi");

const pick = (reqobj, schemakey) => {
  return schemakey.reduce((obj, k) => {
    if (reqobj && reqobj.hasOwnProperty(k)) {
      obj[k] = reqobj[k]
    }

    return obj;
  }, {})
}


const validation = (schema) => (req, res, next) => {
  try {
    const obj = pick(req, Object.keys(schema))
    console.log(obj)

    const { error, value } = Joi.compile(schema).prefs({ abortEarly: false }).validate(obj)
    console.log(error, value);

    if (error) {
      const errorobj = error.details.map(v => v.message).join(",");
      console.log(errorobj)
      res.status(400).json({
        success: false,
        data: null,
        error: "error at valadation" + errorobj
      })
    }

   req = Object.assign(value)

    next()

  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      error: "internal server error" + error
    })
  }
}
module.exports = validation;