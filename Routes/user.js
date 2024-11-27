const express = require("express")
const router = express.Router()

const {createUser, getAllUsers, deleteById, getUserById, updateUserById} =  require("../controllers/user")

router.get('/get/users', getAllUsers)
router.get('/create/user/:name/:email/:age/:gender', createUser)
router.get('/delete/user/:id', deleteById)
router.get('/get/user/:id', getUserById)
router.get('/update/user/:id/:name', updateUserById)

module.exports = router
