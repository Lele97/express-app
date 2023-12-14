const express = require("express")
const router = express.Router();
let json_data = require("../data/nodejs_public_api_short.json")

router.get("/", (req, res) => {

    req.api = json_data
    console.log(req.api)

    res.render("api", {
        message: "List api local",
        results: req.api,
        number: Object.keys(req.api).length
    })
})

module.exports = router