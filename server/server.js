// // // express 모듈 호출
// // const express = require('express');
// // const app = express();
// // const PORT = process.env.PORT || 4000;


// // let mysql = require("mysql");

// // let connection = mysql.createConnection({
// //   host     : 'localhost',
// //   user     : 'root',
// //   password : 'autoset',
// //   database : 'happydjdb'
// // });
  
// // connection.connect();
 
// // // http://localhost:4000/ 으로 접속 시 응답메시지 출력
// // app.get('/', (req,res) => {
// //     /*
// //     res.send('Server Response Success');
// //     */

// //     connection.query('select * from happydjdb.board',function(a,b,c){
// //         res.send(b);
// //         })

// // })
 
// // app.listen(PORT, () => {
// //     console.log(`Server run : http://localhost:${PORT}/`)
// // })


// const express = require('express');
// const router = express();
// const db = require('../config/db')
 
// app.get('/api/host', (req, res) => {
//   res.send({ host : 'localhost' });
// })

// app.get('/api/test', (req, res) => {
//   db.query("select * from test", (err, data) => {
//       if(!err) {
//           res.send(data);

//       } else {
//           console.log(err);
//           res.send(err);
//       }
//   })
// })

// app.listen(PORT, () => {
//   console.log(`Server On : http://localhost:${PORT}/`);
// })
 
// module.exports = router;





const express = require("express"); 
const app = express();
const port = 4000; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "root", //mysql의 password
    database : "tistory", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('혁이는 코딩 중!')
})

app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    // console.log(req.body);
    connection.query("INSERT INTO test (test_body) values (?)",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
});

app.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM test",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            res.send(rows[0]);
        }
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})
