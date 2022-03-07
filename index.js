const express = require("express");
const app = express();


app.use(logger);

app.get("/books",function(req,res){
    

    return res.send({ route: "/books"});
});

app.get("/libraries",checkPermission,function(req,res){
    return res.send({ route: "/libraries", permission: true});
});

app.get("/authors",checkPermission,function(req,res){
    
    return res.send({ route: "/authors", permission: "true"});
});

app.listen(5000,() => {
    console.log("listening");
});

function logger(req,res,next){
    console.log(req.path);
    next();
};
function checkPermission(req,res,next){
    if(req.path==="/authors"){
        req.role=req.path;
        req.permission  = true;
        
    }else if(req.path==="/libraries"){
        req.role = "libraries";
        req.permission = true;
    }
    next()
}
