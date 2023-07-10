
import express from 'express';
let router = express.Router();



router.post("/register", (req, res) => { // saving data to database using post

    /*
    User.create({
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    })
    */

    res.json({
        something: "value"
    })

})

router.post("/login", (req, res) => { // comparing passwords by readiing user data 

    res.json({
        something: "value"
    })

})


export default router;


// write code to compare 
//using bcrypt 

