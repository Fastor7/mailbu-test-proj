const { fetchHomePageNews } = require("../controller/home.controller")

const router = require("express").Router()

router.get("/home/news",fetchHomePageNews)

module.exports = router;