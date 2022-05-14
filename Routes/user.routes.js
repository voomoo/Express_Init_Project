const express = require("express");
const router = express.Router();

const {getUsers, addUser} = require("../Controllers/user.controller")

router.route("/user").get(getUsers);
router.route("/user").post(addUser);

module.exports = router;