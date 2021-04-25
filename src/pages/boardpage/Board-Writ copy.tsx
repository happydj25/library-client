import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const BoardWrit = () => {

    // const [boardTitle, setBoardTitle] = useState('');
    // const [boardText, setBoardText] = useState('');

    

    //   console.log(boardList);
    



// const onChange = (e: { target: { name: any; value: any; }; }) => {
//     //input에 name을 가진 요소의 value에 이벤트를 걸었다
//     const {name,value} = e.target

//     // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
//     const nextBoardLists = {
//         //스프레드 문법으로 기존의 객체를 복사한다.
//         ...boardList,
//         [name]: value,
//     }
//     //만든 변수를 seInput으로 변경해준다.
//     setBoardList(nextBoardLists)

// }
// //안의 값을 초기화하는 객체를 변수에 넣었다
// const onReset = () => {
//     const resetBoardLists = {      
//         title: '',
//         boardpw: '',
//         content: ''
//     }
// //초기화 객체값을 넣은 변수로 변경하도록 셋인풋 실행
//     setBoardList(resetBoardLists)      
// }


// const onCreate = (e: {
//         target: {
//             value: React.SetStateAction<{
//                 // id: '',
//                 boardpw: string; title: string; content: string;
//             }>;
//         };
//     }) => {
//     setBoardList(e.target.value)
    
// }



    // const addBoard = (event: any) => {
    //     event.preventDefault();
    //     console.log(boardTitle, boardText);

    //     // board.push({
    //     //     title: boardTitle,
    //     //     text: boardText
    //     // })

    //     // 새로고침 ㄴㄴ 다른방법 찾아보기
    //     // window.location.assign('/boardlist');
    // }
        
    return (
        <article className="board_list">
            <h3>게시판 글쓰기</h3>
            {/* <form onSubmit={onChange}> */}
                <table>
                    <thead></thead>
                    
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input 
                                    type="text" 
                                    name='title'
                                    placeholder="글제목" 
                                    // onChange={handleOnChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input 
                                    type="password" 
                                    name='boardpw'
                                    placeholder="글비밀번호" 
                                    // onChange={handleOnChange}
                                    minLength='4'
                                    maxLength='4'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea 
                                    name="content" 
                                    placeholder="글내용" 
                                    // onChange={handleOnChange}
                                >
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                
                {/* <button onClick={onReset}>초기화</button> */}
                {/* <button  >등록</button> */}
                <Link onClick={handleOnChange} to={{pathname: `/boardlist/${boardList.title}`, state: {boardList} }}>등록</Link>
                {/* <button type="submit">글쓰기</button> */}
            {/* </form> */}
        </article>
    );
}

export default BoardWrit;