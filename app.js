//jshint esversion:6
const express = require("express");
const bodyParser =  require("body-parser");
const { request } = require("express");
const date = require(__dirname+"/date.js");

let items = ["food","water","fire"];
var workitems = [];

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let day = date.getDate();
    res.render("list",{listtitle:day,newItems:items});
});
app.post("/",function(req,res){
    let item = req.body.newItems;
    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{listtitle:"Work List",newItems:workitems});
});

app.get("/about",function(req,res){
    res.render("about");
});
// app.post("/work",function(req,res){
//     let item= req.body.newItems;
//     workitems.push(item);
//     res.redirect("/work");
// });




app.listen(3000,function(){
    console.log("server is running at port 3000")
})



function remove()
{
var x=document.getElementsByClassName("aa");
x.remove(x.selectedIndex);
}