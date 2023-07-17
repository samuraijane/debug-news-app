
const express = require ('express');
const fetch = require('node-fetch');
let router = express.Router();
const User = require ('../models/userSchema.js')


//get all headlines
//GET /api/headlines/:
router.get("/", async (req, res) => {
    console.log(req.body)
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (err){
        console.log(err)
        res.json(err)
    }


});

//GET/api/headlines/country/:country:
router.get("/country/:country", async (req, res) => {

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${req.params.country}&apiKey=${process.env.API_KEY}`);

        
        const data = await response.json();
        res.json(data);
    } catch (err){
        console.log(err)
        res.json(err)
    }


})

// Save article
//POST /api/articles/:
router.post('/', async (req, res) => { //api/articles
    try {
      const { user_id, article_id } = req.body;
      const result = await User.findByIdAndUpdate(
        user_id,
        {
          $push: { favoriteList: article_id },
        }
      );
      const result2 = await User.findById(user_id);
      res.json(result2);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  });
  


  



module.exports = router;

