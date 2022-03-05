const express = require("express");
const { getAllUsers, getSingleUsers, addUser, deleteUser, updateUser, getStr } = require("../controller/user");
const router = express.Router();

router.route('/allUsers').get(getAllUsers);
router.route('/allStr').get(getStr);
router.route('/:id').get(getSingleUsers).delete(deleteUser).patch(updateUser);
router.route('/addUser').post(addUser);
// router.route('/deleteUser/:id').delete(deleteUser);

module.exports = router;