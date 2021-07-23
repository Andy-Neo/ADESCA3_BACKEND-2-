/* Name: Andy Neo
   Class: DIT 1B/04
   Admin Number : P2021023 */
var app=require('./controller/app.js');
var port=8001;

var server=app.listen(port,function(){

    console.log("App hosted at localhost:"+port);

    
});