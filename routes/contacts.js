const express = require('express');
const router = express.Router();
const {getContacts,getContactsById,DelerteContactsById,UpdateContactsById,CreateContacts} = require("../controllers/contactsController")

router.get("/", getContacts)

router.post("/create", CreateContacts)

router.get("/:id",getContactsById)

router.put("/update/:id", UpdateContactsById)

router.delete("/delete/:id", DelerteContactsById)

module.exports= router;