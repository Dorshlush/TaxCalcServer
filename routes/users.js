
const express = require('express')
const router = express.Router();
const {addNewUser,getUserDetails}=require("../controllers/userController")

router
.route('/')
.post(addNewUser)

router
.route('/userdetails')
.post(getUserDetails)




module.exports = router