const express = require ('express'); // import express module 
const router = express.Router(); // handle url // router object allows you to define routes and associated request handlers for those routes. 
//let router = express.Router(); // handle url // router object allows you to define routes and associated request handlers for those routes. 
// import User from '../models/userSchema.js'; // mongo 
const User = require ('../models/userSchema.js')

//get all articles
//fetch function  used to make HTTP request
//defining GET route handler for the /category/:category endpoint
// router.get() method to specify the HTTP method as GET and the route pattern as /category/:category.
//URL with the category parameter and an API key from the environment variables to fetch data from the News API.
//response is converted to json  and is sent back as res.json 



router.get("/category/:category", async (req, res) => { // fetch call here 
    
    try{
        const url = `https://newsapi.org/v2/everything?q=${req.params.category}&apikey=${process.env.API_KEY}`; // params is what we pass through in the url and this case that would be the catergory. 
        const response = await fetch(url);
        const data = await response.json();
        res.json(data)
  
    } catch (err){
        console.log(err);
        res.json(err)
    }
     


})

//need to add middleware 
//next routes api/favourites -example 
// finding user id and adding selected article  to fav list 
router.post("/", async (req, res)=> { //local host 8080
    //userid, articleid
    console.log(req.body)
    try{
        const result = await User.findByIdAndUpdate(
            req.body.user_id,
            {
                $push: {  favoriteList: req.body.article_id}
            }

        );

        const result2 = await User.findById(
            req.body.user_id
        )

        res.json(result2)
    } catch (err){
        console.log(err);
        res.json(err)
    }

});


//showing user by id profile
// returns, id, email, password, favoriteList that needs to go to user profile page
// need to do fetch to account page to display informaiton 
router.get("/user", async (req, res) => {

    console.log(req.session) // ask for session by console log 
    /*
    if(req.session.user.hasOwnProperty('id')){
        res.json({
            message: "No Session User ID Please Log in"
        })
    } else {
        res.json({
            message: "pass"
        })
    }
*/

    try{
    
        //console.log("do i have session??",  req.session.user.id)
        const result = await User.findById(
            req.session.user.id
        )
        res.json(result)
    } catch (err){
        console.log(err);
        res.json(err)
    }

})

router.get('/id', async (req, res) => {

    //let favorites = db.query(`SELECT * from favorites WHERE personid =`{user_id})
})
// /api/articles 
//defining a POST route handler for the root URL (/api/articles). 
//It will handle the request when a client sends a POST request to /api/articles
//The route handler logs the userId and articleId received in the request's body
//It typically performs operations like saving the article to a database or performing other relevant operations
//it sends a JSON response with a "Saved Article!" message
/*
router.post("/", (req, res) => { // sending data to body , send user id and article from favs, whos is selecting that would come from data. post is what we are getting from user. server is receiving. 

   // console.log( req.body.userId, req.body.articleId );

    /*
    const result = await Favorites.create({
        userId: req.body.userId,
        url: req.body.articleId
    })
    */
   
    //need to save to database
    /*
    res.json({
        message: "Saved Article!"
    })

});*/



//REST METHOD 
//GET - receive data - url 
//POST - send data - body 
//PUT - update data - body
//DELETE - remove data - body 



module.exports = router;
