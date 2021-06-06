// // express 모듈 호출
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 4000;


// let mysql = require("mysql");

// let connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'autoset',
//   database : 'happydjdb'
// });
  
// connection.connect();
 
// // http://localhost:4000/ 으로 접속 시 응답메시지 출력
// app.get('/', (req,res) => {
//     /*
//     res.send('Server Response Success');
//     */

//     connection.query('select * from happydjdb.board',function(a,b,c){
//         res.send(b);
//         })

// })
 
// app.listen(PORT, () => {
//     console.log(`Server run : http://localhost:${PORT}/`)
// })


const express = require('express');
const router = express();
const db = require('../config/db')
 
// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req,res) => {
    db.query('SELECT * FROM table1', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})
 
module.exports = router;



