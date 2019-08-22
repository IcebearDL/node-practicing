var mysql = require('mysql'); 
var connection = mysql.createConnection({ 
host : 'localhost', 
user : 'root2', 
password : '123456', 
database : 'zhifou' 
}); 
connection.connect(); 
connection.query('SELECT user_info.user_id,user_info.user_username FROM user_info WHERE user_info.user_nickname = "我爱王馨悦"', function (error, results) { 
if (error) console.log(error); 
console.log('The solution is: ', results); 
}); 