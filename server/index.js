const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'autoset',
    database: 'happydjdb'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// 문의게시판 글 추가
app.post("/api/insert", (req, res) => {
    const user_id = req.body.user_id;
    const user_name = req.body.user_name;    
    const board_title = req.body.board_title;
    const board_text = req.body.board_text;
    const sqlInsert = 
        `INSERT INTO board (user_id, user_name, board_title, board_text) VALUES (?,?,?,?)`;
    db.query(sqlInsert, [user_id, user_name, board_title, board_text], (err, result) => {
        res.send('등록완료');
    });
});

// 문의게시판 글 리스트 가져오기
app.get("/api/select", (req, res) => {
    const sqlSelect = `SELECT board_no, user_id, user_name, board_title,board_text, reg_dt FROM happydjdb.board`;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// 문의게시판 글 삭제
app.delete('/api/delete/:board_no', (req, res) => {
    const id = req.params.board_no;
    let sqlDelete = `DELETE FROM happydjdb.board WHERE board_no = ?`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
});

// 문의게시판 글 수정
app.put('/api/update/:board_no', (req, res) => {
    const board_no = req.body.board_no;
    const board_title = req.body.board_title;
    const board_text = req.body.board_text;
    let sqlUpdate =`UPDATE happydjdb.board SET board_title=?, board_text=?, reg_dt=CURRENT_TIMESTAMP WHERE board_no=?;`

    db.query(sqlUpdate, [ board_title, board_text, board_no], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// 회원가입
app.post('/register', (req,res) => {
    // 1. 회원가입할때 필요한 정보들을 client에서 가져오면
    // 2. 데이터베이스에 넣어준다
    // const user = new User

    // user.save((err, doc) => {
    //     if(err) return res.json({success: false, err})
    //     return res.status(200).json({
    //         success: true
    //     })
    // })

    // console.log(req);
    const user_id = req.body.user_id;
    const user_pw = req.body.user_pw;    
    const user_name = req.body.user_name;    
    const user_email = req.body.user_email;
    const user_phone = req.body.user_phone;
    const user_address = req.body.user_address;

    const sqlInsert = `INSERT INTO user (user_id, user_pw, user_name, user_email, user_phone, user_address) VALUES (?,?,?,?,?,?)`;
    db.query(sqlInsert, [user_id, user_pw, user_name, user_email, user_phone, user_address], (err, result) => {
        res.send('회원가입 완료');
    });
});

app.listen(port, () => console.log(`running on port ${port}`));
 