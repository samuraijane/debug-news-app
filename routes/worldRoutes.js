const express = require ('express');


const router = express.Router();

router.get("/:country", async (req, res) => {

  try {
    const { country } = req.params;

    const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${country}&apiKey=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// export default router;
module.exports = router;
