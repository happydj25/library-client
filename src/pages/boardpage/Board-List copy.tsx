import React, {constructor, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import board from '../../json/board.json';
import BoardWrit from './Board-Writ'

const BoardList = () => {

// 게시글 만들기
// 1. 게시글쓰기input에 내용 입력
// 2. 작성완료 누르면 게시글 내용을 배열에 저장
// (글ID, 글 비밀번호, 글제목, 글내용, 작성시간, 조회수)
// 3. 글 리스트는 배열의 순서대로 내용 불러온다

    const [boardList, setBoardList] = useState({
        // id: '',
        boardpw: '',
        title: '',
        content: '',
        // createdDateTime: '',
        // view:''
    })
    const handleOnChange = (e) => {
        setBoardList({
        ...boardList, 
        [e.target.name]: e.target.value
        })
    }



    let location2:any = useLocation();
    console.log('gd',location2);

    // const [boardList, setBoardList] = useState({
    //     id: '',
    //     boardpw: '',
    //     title: '',
    //     content: '',
    //     createdDateTime: '',
    //     view:''
    // })

    // const { id, boardpw, title, content, createdDateTime, view } = boardList;

    // const onChange = (e: { target: { name: any; value: any; }; }) => {
    //     const { name, value } = e.target;
    //     setBoardList({
    //       ...boardList,
    //       [name]: value
    //     });
    //   };

    // const users = [
    //     {
    //       id: 1,
    //       username: 'velopert',
    //       email: 'public.velopert@gmail.com'
    //     },
    //     {
    //       id: 2,
    //       username: 'tester',
    //       email: 'tester@example.com'
    //     },
    //     {
    //       id: 3,
    //       username: 'liz',
    //       email: 'liz@example.com'
    //     }
    //   ];
    //     const nextId = useRef(4);
    //     const onCreate = () => {
    //         // 나중에 구현 할 배열에 항목 추가하는 로직
    //         // ...

    //         setBoardList({
    //             boardpw: '',
    //             title: '',
    //             content: ''
    //           });

    //         nextId.current += 1;
    //     };


    return (
        <article className="board_list">
            <BoardWrit 
                // boardpw={boardpw}
                // title={title}
                // content={content}
                // onChange={onChange}
                // onCreate={onCreate}
            />
            <h3>게시판</h3>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <Link to="">gdgd</Link>
                        </td>
                        <td>user1</td>
                        <td>20210410</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/boardwrit">글쓰기</Link>
        </article>
    );
}

export default BoardList ;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
