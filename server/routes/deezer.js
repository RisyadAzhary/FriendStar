const express = require("express")
const DeezerController = require("../controllers/deezer")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")
const router = express.Router()

// router.use(authentication)

//liat tweet si User
router.get("/album", DeezerController.findAlbum)
router.get("/artist", DeezerController.artist)

module.exports = router