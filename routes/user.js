const express = require("express");
const { getAllUsers, getSingleUsers, addUser } = require("../controller/user");
const router = express.Router();

router.route('/allUsers').get(getAllUsers);
router.route('/:id').get(getSingleUsers);
router.route('/addUser').post(addUser);

module.exports = router;