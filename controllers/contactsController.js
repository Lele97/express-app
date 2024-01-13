//@desc get all contacts
//@route Get /contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({
        message:"Get all contacts"
    })
}

//@desc contacts by id
//@route Get /contacts/:id
//@access public
const getContactsById = (req,res)=>{
    res.status(200).json({
        message:"Get contacts for " + req.params.id
    })
}

//@desc delete contacts bi id
//@route Get /concats/delete/:id
//@access public
const DelerteContactsById = (req,res)=>{
    res.status(200).json({
        message:"Delete contacts for " + req.params.id
    })
}

//@desc create contacts
//@route Get /concats/create
//@access public
const CreateContacts = (req,res)=>{
    console.log("The request body :" + req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(404)
        throw new Error("valorizzare request")
    }
    res.status(200).json({
        message:"Create contacts"
    })
}

//@desc update contacts by id
//@route Get /concats/update/:id
//@access public
const UpdateContactsById = (req,res)=>{
    res.status(200).json({
        message:"Update contacts for " + req.params.id
    })
}

module.exports= {getContacts,getContactsById,DelerteContactsById,UpdateContactsById,CreateContacts}