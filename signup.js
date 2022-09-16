// const User = require("../models/model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const validator = require("email-validator");

// // Register for user registration
// const register = (req, res, next) => {
//   bcrypt.hash(req.body.Password, 10, function (err, hashedPass) {
//     if (err) {
//       res.json({
//         error: err,
//       });
//     }
//     if (validator.validate(req.body.Email)) {
//       let user = new newuser({
        
//         Email: req.body.Email,
//         Password: hashedPass,
        
//       });
//       newuser
//         .save()
//         .then((user) => {
//           res.json({
//             message: "User Added Successfully",
//           });
//         })
//         .catch((error) => {
//           res.json({
//             message: error,
//           });
//         });
//     } else {
//       res.send("Email is not valid");
//     }
//   });
// };

// module.exports = register;