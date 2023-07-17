
const express = require ('express');
let router = express.Router();
// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
// import User from '../models/userSchema.js';
const User = require('../models/userSchema');


router.post("/register", async (req, res) => { // saving data to database using post


   
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);

        try {

            const result = await User.create({
                email: req.body.email,
                password: hashedpassword
            })

           

          
            res.json(result);
        
        } catch (err) {
            console.log(err);
            res.json(err);

        }
       

});

router.post("/login", async (req, res) => { // comparing passwords by readiing user data 

    console.log("logging in")

    //console.log(req.body);
    try {

        const OneUser = await User.findOne({
            email: req.body.email,
        });

        req.session.user = {
            email: OneUser.email,
            id: OneUser._id      
        };
        req.session.save();
        console.log("saving a session", req.session)


        bcrypt.compare(req.body.password, OneUser.password, function(err, result) {
            // result =
          
            if(result){
                res.json(OneUser);
            } else {
                res.json({
                    message: "Incorrect Password"
                })
                //res.json(OneUser);
            }

        });


   
    
    } catch (err) {
        console.log(err);
        res.json(err);

    }


})


// export default router;
module.exports = router;

// write code to compare 
//using bcrypt 

