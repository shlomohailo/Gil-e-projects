const userModel = require('../models/model-users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateRegister = require('../validation/register');
const validateLogin = require('../validation/login');
const key = process.env.SECRET_KEY;

const getUser = async (req, res) => {
    await userModel.find({})
        .then((user, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (user.length == 0) {
                return res.json({ success: false, message: "No user available" })
            }
            res.status(200).json({ success: true, user })
        })
};


const register = async (req, res) => {
    const { isValid, errors } = validateRegister(req.body);
    if (!isValid) return res.status(400).json(errors)
    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(400).json(err)
        if (user) return res.status(400).json({ email: "email already taken" })
        bcrypt.genSalt()
            .then((salt) => {
                bcrypt.hash(req.body.password, salt)
                    .then(async (hashPassword) => {
                        req.body.password = hashPassword;
                        await userModel.insertMany(req.body)
                            .then(() => res.json({ massage: "success" }))
                            .catch(err => res.json(err))
                    })
                    .catch(err => { console.log(err); })
            })
            .catch(error => { console.log(error); })
    })
}
const login = async (req, res) => {
    const { isValid, errors } = validateLogin(req.body)
    if (!isValid) return res.status(400).json(errors)
    const email = req.body.email;
    const password = req.body.password;
    userModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailNotFound: "Email not found" });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                    jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
                        if (err) return res.status(400).json(err)
                        res.json({ success: true, token: `Bearer ${token}` });
                    });
                }
                else {
                    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
                }
            });
        });
}
module.exports = {
    register,
    login,
    getUser
}