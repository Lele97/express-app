const express = require("express")
const router = express.Router();
let json_data = require("../data/nodejs_public_api_short.json")

router.get("/", (req, res) => {

    req.api = json_data

    res.render("api", {
        message: "Api page",
        results: req.api,
        number: Object.keys(req.api).length
    })
})

module.exports = router