//@desc get all contacts
//@route Get /contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({
        message:"Get all contacts"
    })
}

const getContactsById = (req,res)=>{
    res.status(200).json({
        message:"Get contacts for " + req.params.id
    })
}

module.exports= {getContacts,getContactsById}