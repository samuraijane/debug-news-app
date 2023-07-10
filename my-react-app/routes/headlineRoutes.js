
import express from 'express';
let router = express.Router();


//get all headlines
router.get("/", async (req, res) => {

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (err){
        console.log(err)
        res.json(err)
    }


})

//get one headline by topic
router.get("/:topic", (req, res) => {

})



export default router;

