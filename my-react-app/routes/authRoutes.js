
import express from 'express';
let router = express.Router();
import bcrypt from 'bcrypt';
import User from '../models/userSchema.js';



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

    console.log(req.body);
    try {

        const OneUser = await User.findOne({
            email: req.body.email,
        })
       

        bcrypt.compare(req.body.password, OneUser.password, function(err, result) {
            // result =
            console.log(err, result);
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
    /*
        const {username,password} = req.body;
        // let results = [];
        let dbsearch = await db.query(`SELECT * FROM userinfo WHERE username='${username}'`);
        let dbsearch2 = await db.query(`SELECT * FROM userinfo WHERE email='${email}'`);

        if (dbsearch.length > 0 || dbsearch2.length > 0) {
            const hashedpassword = await db.query(`SELECT password FROM userinfo WHERE username='${username}'`);
            const matchup = await bcrypt.compare(password, hashedpassword[0].password);
            if (matchup) {
                res.json({
                    username: username,
                    isAuthenticated: true,
                    redirectTo: '/headlineroutes'
                })
            }
        } else {
            res.json({message: 'user does not exist'})
        }
    })
    res.json({
        something: "value"
    })
    */

})


export default router;


// write code to compare 
//using bcrypt 

