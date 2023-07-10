
import express from 'express';
let router = express.Router();//part of express package 



//get all account
router.get("/", (req, res) => { // getting  account info to display 

    /*
    const result = Account.findBy({
        where: email: "greg@gmail.com"
    })
    */
   
    res.json({
        something: "value"
    })

})

router.put("/", (req, res) => { // any changes or updates 

    res.json({
        something: "value"
    })

})


export default router;

// write in front end to show this 