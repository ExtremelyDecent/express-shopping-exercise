const express = require("express");
const app = express();
const itemsRoutes = require("./routes/items");
const ExpressError = require("./expressError");

app.use(express.json());
app.use("/items", itemsRoutes);

/** 404 */

app.use(function(req, res, next){
    return new ExpressError("404! Not Found", 404);
});

/** general error */

app.use((e, req,res,next)=> {
    res.status(e.status||500);
    return res.json({
       error:e.message, 
    });
});
app.listen(3000, function(){
    console.log(`Starting server on port: 3000`);
});
module.exports= app;



