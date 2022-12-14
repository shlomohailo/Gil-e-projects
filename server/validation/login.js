const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateLogin = (user) => {
  
    errors = {};
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;

    if (validator.isEmpty(user.email)) errors.email = "email Is required";
    if(!validator.isEmail(user.email)) errors.email = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.password = "password Is required";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}