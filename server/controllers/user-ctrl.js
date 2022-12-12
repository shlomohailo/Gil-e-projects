const UsersModal = require('../models/model-users');

const getUsers = async(req, res) => {
    await UsersModal.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no users was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

const getUserById = async(req,res) => {
    await UsersModal.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no user was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

const addUser = async(req,res) => {
    await UsersModal.insertMany(req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const updateUser = async(req,res) => {
    await UsersModal.findByIdAndUpdate(req.params.id, req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const deleteUser = async(req,res) => {
    await UsersModal.findByIdAndRemove(req.params.id, req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

module.exports = {getUsers,getUserById,addUser,updateUser,deleteUser}