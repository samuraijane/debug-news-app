import express from 'express';
let router = express.Router(); // handle url 


//get all articles
router.get("/category/:category", async (req, res) => { // fatech call here 
    
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
router.get("/:id", (req, res) => {

})


// /api/articles
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
