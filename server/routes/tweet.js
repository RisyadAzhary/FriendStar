const express = require("express")
const TweetController = require("../controllers/tweet")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")
const router = express.Router()

router.use(authentication)

//liat tweet si User
router.get("/", TweetController.showAll)

//create tweet si User
router.post("/", TweetController.create)

//edit tweet si User
router.put("/:id", authorization, TweetController.edit)

//delete tweet si User
router.delete("/:id", authorization, TweetController.delete)

module.exports = router

