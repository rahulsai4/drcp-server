const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    deleteAllUsers,
} = require("../controllers/user.controller");

const {authenticateUser, authorizeUser} = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/:id", authenticateUser).get(getUser).patch(updateUser).delete(deleteUser);
// admin
router.route("/", authenticateUser).get(getAllUsers).delete(deleteAllUsers);

module.exports = router;
