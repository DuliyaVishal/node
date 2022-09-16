// bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//         return res.status(500).json({
//             error: err
//         });
//     } else {
//         let employee = new employeeModel({
    
//             email: req.body.email,
//             password: hash,
    
//         });
//         newuser.save()
//             .then(result => {
//                 res.status(201).json({
//                     message: "user created"
//             })
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     error: err
//                 });
//         })

//     }
// });

    
// }