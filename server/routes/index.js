const express = require("express");
const router = express.Router();
const friendstarController = require("../controllers/todoController");
const userController = require("../controllers/userController");



//create
router.post("/friendstar", friendstarController.addPost);
//read
router.get("/friendstar", friendstarController.showPost);

//update
router.put("/friendstar/:id", friendstarController.update);

//delete
router.delete("/friendstar/:id", friendstarController.delete);
//register & login
router.post("/user/register", userController.register);
router.post("/user/login", userController.login);

module.exports = router;
