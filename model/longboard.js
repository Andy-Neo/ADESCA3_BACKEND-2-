/* Name: Andy Neo
   Class: DIT 1B/04
   Admin Number : P2021023 */
var db = require('./databaseConfig.js');

var longboards = {
    getLongboard: function (callback) {
        var conn = db.getConnection();//establish connection
        conn.connect(function (err) {
            if (err) {
                console.log(err);//if error detected, runs this line
                return callback(err,null);
            } else {//no error detected
                console.log("Connected!");
                var sql = 'SELECT * FROM longboards'; //SQL statement 
                
                conn.query(sql, function (err, result) { 
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    } else {
                        return callback(null, result);//result successfully retrieved, returns result with null as error
                    }
                });
            }
        });
    },
    getOneLongboard: function (id, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Connected!");
                
                var sql = 'SELECT name,category,imgurl,price FROM longboards WHERE id = ?'; 
                
                conn.query(sql, [id], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    getWishlist: function (callback) {
        var conn = db.getConnection();//establish connection
        conn.connect(function (err) {
            if (err) {
                console.log(err);//if error detected, runs this line
                return callback(err,null);
            } else {//no error detected
                console.log("Connected!");
                var sql = 'SELECT * FROM wishlist'; //SQL statement 
                
                conn.query(sql, function (err, result) { 
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    } else {
                        return callback(null, result);//result successfully retrieved, returns result with null as error
                    }
                });
            }
        });
    },

    addWishlist:function(name,category,imgurl,price,callback){
        var conn = db.getConnection();
        conn.connect(function(err){
            if(err){
                console.log(err);
                return callback(err,null);
            }else{
                console.log("Connected!");
                var sql = "insert into wishlist(name,category,imgurl,price) values(?,?,?,?)";
                conn.query(sql,[name,category,imgurl,price],function(err,result){
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    }else{
                        console.log(result);
                        return callback(null,result);
                    }
                });
            }
        })
    },

    deleteLongboard: function (id, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err,null);
            } else {    
                console.log("Connected!");
                var sql = 'Delete from longboards where id=?';
                conn.query(sql, [id], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    } else {           
                        return callback(null,result);
                    }
                });
            }        
        });  
    },
}
module.exports = longboards;