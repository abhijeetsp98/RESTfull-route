var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

mongoose.connect("mongodb://localhost/restful_blog_app"); //communicate with mongodb
app.set("view engine", "ejs"); //to avoid typing ejs
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({text:true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//routes
app.get("/blogs",function(req, res){
    Blog.find({},function(err, blogs){
        if(err){
            console.log("ERROR!");
        }else{
            res.render("index",{blogs: blogs});
        }
    });
});

//create
app.post("/blogs", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }else{
            res.redirect("/blogs");
        }
    });
});

//new
app.get("/blogs/new",function(req,res){
    res.render("new");
});

//show
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show",{blog: foundBlog});
        }
    });
});

//edit
app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit",{blog: foundBlog});
        }
    });
});

//update
app.put("/blogs/:id", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

//delete
app.delete("/blogs/:id", function(req,res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    });
});

app.listen(3000,function(){
    console.log("Server is up");
});