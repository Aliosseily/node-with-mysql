const express = require("express");
const { getAllUsers, getSingleUsers, addUser, deleteUser, updateUser } = require("../controller/user");
const router = express.Router();

router.route('/allUsers').get(getAllUsers);
router.route('/:id').get(getSingleUsers).delete(deleteUser).patch(updateUser);
router.route('/addUser').post(addUser);
// router.route('/deleteUser/:id').delete(deleteUser);

module.exports = router;