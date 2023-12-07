const express = require("express")
const router = express.Router();

router.get("/",(req, res)=>{
    res.render("api", {
       message:"List api local" 
    })
})

module.exports = router