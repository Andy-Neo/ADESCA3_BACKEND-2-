/* Name: Andy Neo
   Class: DIT 1B/04
   Admin Number : P2021023 */
var mysql=require('mysql');//to load mysql library

var dbConnect={
    //defining connection settings
    getConnection:function(){
        var conn=mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Anhh2516!",
            database:"adesca3",
            dateStrings : true //convert date string
            

        }

        );

        return conn;

    }
}

module.exports=dbConnect;