const connectDB = require("../db/connect");

const getAllUsers = (req, res) => {
  let sqlQuery = "SELECT * FROM user";
  connectDB.query(sqlQuery, (err, response) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.sqlMessage });
    }
    if (response.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no users found!" });
    }
    return res.status(200).send({ success: true, data: response });
  });
};

const getSingleUsers = (req, res) => {
  const { id } = req.params;
  let sqlQuery = `SELECT * FROM user WHERE UserId = ${id}`;
  connectDB.query(sqlQuery, (err, response) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.sqlMessage });
    }
    if (response.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: `user with id ${id} not found!` });
    }
    return res.status(200).send({ success: true, data: response });
  });
};

const addUser = (req, res) => {
  const { body } = req;
  let sql = "INSERT INTO user SET ?";
  connectDB.query(sql, body, (err, response) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.sqlMessage });
    }
    return res
      .status(200)
      .send({ success: true, data: { ...body, id: response.insertId } });
  });
};

module.exports = {
  getAllUsers,
  getSingleUsers,
  addUser,
};
