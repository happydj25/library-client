const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser'); //프론트엔드 작성 구문 분석
const cookieParser = require('cookie-parser'); // 다시 파싱
const session = require('express-session'); // 기본적인 세션생성, 사용자 유지

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 4000; //포트 4000고정


app.use(express.json());
 // 자격증명, 쿠키 활성화 할 수 있도록 허용 기본적 수행
 /**
 * Book 함수
 * @constructor
 */
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    })
);
app.use(cookieParser()); //종속성 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 세션초기화
app.use(
    session({
        key: 'userId',
        secret: 'subscribe',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24, //로그인 상태 지속
        },
    })
);


const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'autoset',
    database:'happydjdb',
});

app.post("/register", (req, res) => {
    const user_id = req.body.user_id;
    const user_pw = req.body.user_pw;

    // 비밀번호 암호화 저장
    bcrypt.hash(user_pw, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query( `INSERT INTO user (user_id, user_pw) VALUES (?,?)`,
            [user_id, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    
    if (!token) {
        res.send("토큰이 필요합니다.")
    } else {
        jwt.verify(token, 'jwtSecret', (err, decoded) => {
            if (err) {
                // 인증실패
                res.json({auth: false, massage: "인증실패"});
            } else {
                req.user_Id = decoded.id;
                next();
            }
        })
    }
}

// 엔드포인트 로그인 인증성공
app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send("로그인 인증 성공")
})

app.get("/login", (req, res) => {
    // 사용자가 로그인을 했는지 안했는지 확인
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

// 로그인
app.post("/login", (req, res) => {
    const user_id = req.body.username;
    const user_pw = req.body.password;

    db.query(
        `SELECT * FROM user WHERE user_id = ?;`, 
        user_id, (err, result) => {
            // 오류가 있을때만 출력
            if (err) {
                res.send({ err: err });
            } 
            console.log('result :',result);
            // 오류가 없을때
            if (result) {
                // 프론트에서 가져온 비밀번호를 암호화, DB에 저장한 비밀번호와 비교하기위해서
                bcrypt.compare(user_pw, result[0].user_pw, (error, response) => {
                    console.log(response);
                    if (response) {
                        const id = result[0].id;
                        const token = jwt.sign({id}, 'jwtSecret', {
                            expiresIn: 300, // 5분
                        })

                        res.json({auth: true, token, result});
                        res.send({token});
                    } else {
                        res.send({message: '잘못된 아이디/비밀번호 조합입니다.'});
                    }
                });
            } else {
                res.send({message: '사용자가 존재하지 않습니다.'});
            }          
        }
    );
});

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
// app.post('/register', (req,res) => {
//     // 1. 회원가입할때 필요한 정보들을 client에서 가져오면
//     // 2. 데이터베이스에 넣어준다
//     // const user = new User

//     // user.save((err, doc) => {
//     //     if(err) return res.json({success: false, err})
//     //     return res.status(200).json({
//     //         success: true
//     //     })
//     // })

//     // console.log(req);
//     const user_id = req.body.user_id;
//     const user_pw = req.body.user_pw;    
//     const user_name = req.body.user_name;    
//     const user_email = req.body.user_email;
//     const user_phone = req.body.user_phone;
//     const user_address = req.body.user_address;

//     const sqlInsert = `INSERT INTO user (user_id, user_pw, user_name, user_email, user_phone, user_address) VALUES (?,?,?,?,?,?)`;
//     db.query(sqlInsert, [user_id, user_pw, user_name, user_email, user_phone, user_address], (err, result) => {
//         res.send('회원가입 완료');
//     });
// });

app.listen(port, () => console.log(`running on port ${port}`));
 