import express from 'express'; // import express module 
let router = express.Router(); // handle url // router object allows you to define routes and associated request handlers for those routes. 


//get all articles
//fetch function  used to make HTTP request
//defining GET route handler for the /category/:category endpoint
// router.get() method to specify the HTTP method as GET and the route pattern as /category/:category.
//URL with the category parameter and an API key from the environment variables to fetch data from the News API.
//response is converted to jason  and is sent back as res.json 
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


//get one article by id - wait to build database, we need to read data base to see what they saved. 
//
router.get("/:id", (req, res) => {

})


// /api/articles 
//defining a POST route handler for the root URL (/api/articles). 
//It will handle the request when a client sends a POST request to /api/articles
//The route handler logs the userId and articleId received in the request's body
//It typically performs operations like saving the article to a database or performing other relevant operations
//it sends a JSON response with a "Saved Article!" message
router.post("/", (req, res) => { // sending data to body , send user id and article from favs, whos is selecting that would come from data. post is what we are getting from user. server is receiving. 

    console.log( req.body.userId, req.body.articleId );

    /*
    const result = await Favorites.create({
        userId: req.body.userId,
        url: req.body.articleId
    })
    */
   
    //need to save to database
    res.json({
        message: "Saved Article!"
    })

});

router.delete("/:id", (req, res) => {

});

//REST METHOD 
//GET - receive data - url 
//POST - send data - body 
//PUT - update data - body
//DELETE - remove data - body 



export default router;
