// const Terms = require("../models/Terms.model")
const { default: mongoose } = require("mongoose");
const fs = require("fs");
const pool = require("../db/mysqlconnection");

const getallTerms = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM terms')
    console.log(rows)

    res.status(200).json({
      success: "true",
      data: rows,
      message: "data fetch"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: "false",
      data: null,
      message: "data not  fetch"
    })
  }
}

const getTerms = async (req, res) => {

}

const addTerms = async (req, res) => {

  const { name, description } = req.body;

  try {
    const [rows] = await pool.query(`INSERT INTO terms (name,description) VALUES (?,?)`, [name, description]);

    const [result] = await pool.query(`SELECT * FROM terms WHERE id=${rows.insertId}`)

    res.status(200).json({
      success: "true",
      data: result[0],
      message: "terms is add"
    })
  } catch (error) {
    res.status(500).json({
      success: "false",
      data: null,
      message: "terms not add" + error.message
    })
  }
}

const updateTerms = async (req, res) => {

  const { name, description } = req.body;

  try {

    const [rows1] = await pool.query(`SELECT * FROM terms WHERE id=?`, [req.params.id])
    //console.log(rows1[0].description,description)

    const updatename = name !== '' ? name : rows1[0].name;
    const updatedescription = description !== '' && description !== undefined ? description : rows1[0].description;
    console.log(updatename,updatedescription)

    const [rows] = await pool.query(`UPDATE terms SET name=?,description=? WHERE id=?`, [updatename, updatedescription, req.params.id])

    res.status(200).json({
      success: "true",
      data: { name, description ,id:req.params.id},
      message: "terms is updated"
    })
  } catch (error) {
    res.status(500).json({
      success: "false",
      data: null,
      message: "terms not update" + error.message
    })
  }
}

const deleteTerms = async (req, res) => {
  try {
    const [rows] = await pool.query(`DELETE FROM terms WHERE id=?`, [req.params.id]);

    res.status(200).json({
      success: "true",
      data: rows,
      message: "terms is delete"
    })
  } catch (error) {
    res.status(500).json({
      success: "false",
      data: null,
      message: "terms not delete" + error.message
    })
  }
}

module.exports = {
  getallTerms,
  getTerms,
  addTerms,
  updateTerms,
  deleteTerms
}