import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
    );


//     App.post('/register', (req: { body: any; }, res: { json: (arg0: { success: boolean; err: any; }) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; }): any; new(): any; }; }; }) => {
//         // 회원가입 할때 필요한 정보들을 client에서 가져오면
//         // 그것들을 데이터베이스에 넣어준다
//         const user = new User(req.body)

//         user.save((err: any, userInfo: any) => {
//             if (err) return res.json({success: false , err })
//             return res.status(200).json({
//                 success: true
//             })
//         })
//     })

// App.post('/login', (req, res) => {
//     // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
//     User.findOne({ email: req.body.email }, (err, User) => {
//         if(!user) {
//             return res.json({
//                 loginSuccess: false,
//                 message: '제공된 이메일에 해당하는 유저가 없습니다.'
//             })
//         }

//         // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
//         user.comparePassword(req.body.password, (err, inMatch) => {

//         })

//     })
    

//     // 비밀번호까지 맞다면 토큰 생성하기
// })
