var express=require('express');//load express library


var app=express(); //create an instance of express

var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.use(bodyParser.json()); 
app.use(urlencodedParser);
//importing user/category/games/reviews files
var longboards = require('../model/longboard.js');

//ENDPOINT 1
app.get('/longboards', function (req, res) {
    longboards.getLongboard( function (err, result) {
        if (!err) {
            res.status(200).send(result);
        }
        else{
       console.log(result);
       res.status(500).send("{\"Result\": \"Internal Error\"}");
        }
    });
});
app.get('/longboards/:id', function (req, res) {
    var id = req.params.id;
    if (isNaN(parseInt(id))) {
        res.status(422).json({message: `Id ${id} is not a number!`});//to check if userid input is a number 
    } else {
        longboards.getOneLongboard(id, function (err, result) {
            if (!err) {
                res.status(200).send(result);
            } else {
                res.status(500).send("Internal Server Error");
            }
        });
    }
});
//GET WISHLISTED BOARDS
app.get('/wishlist', function (req, res) {
    longboards.getWishlist( function (err, result) {
        if (!err) {
            res.status(200).send(result);
        }
        else{
       console.log(result);
       res.status(500).send("{\"Result\": \"Internal Error\"}");
        }
    });
});
//DELETE WISHLISTED LONGBOARD
app.delete('/wishlist/:id', function (req, res) {
    var id = req.params.id;

    if (isNaN(parseInt(id))) {
        res.status(422).json({message: `Id ${id} is not a number!`});
    } else {
        longboards.deleteLongboard(id, function (err, result) {
            if (!err) {
                res.status(204).send();
            } else {
                console.log(err);
                res.status(500).send("Internal server error");
            }
        });
    }
});
//ADD ITEM TO WISHLIST
app.post('/addWishlist',function(req,res){
    var { name,category,imgurl,price } = req.body;
    console.log(name)
    longboards.addWishlist(name,category,imgurl,price,function(err,result){
        if(!err){
            res.status(201).send({"id" : result.insertId} );
        }else{
            res.status(500).send("{\"Result\": \"Internal Error\"}");
        }
    })
});

module.exports=app;