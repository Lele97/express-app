const express = require('express');
const router = express.Router();
const {getContacts,getContactsById} = require("../controllers/contactsController")

router.get("/", getContacts)

router.post("/", (req,res)=>{
    res.status(200).json({
        message:"Create Contacts"
    })
})

router.get("/:id",getContactsById)

router.put("/:id", (req,res)=>{
    res.status(200).json({
        message:"Update contacts for " + req.params.id
    })
})

router.delete("/:id", (req,res)=>{
    res.status(200).json({
        message:"Delete contacts for " + req.params.id
    })
})

module.exports= router;