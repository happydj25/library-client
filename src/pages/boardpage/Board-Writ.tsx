import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const BoardWrit = () => {

    const [boardTitle, setBoardTitle] = useState('');
    const [boardText, setBoardText] = useState('');

    const addBoard = (event: any) => {
        event.preventDefault();
        console.log(boardTitle, boardText);

        // board.push({
        //     title: boardTitle,
        //     text: boardText
        // })

        // 새로고침 ㄴㄴ 다른방법 찾아보기
        // window.location.assign('/boardlist');
    }
        
    return (
        <article className="board_list">
            <h3>게시판 글쓰기</h3>
            <form onSubmit={addBoard}>
                <table>
                    <thead></thead>
                    
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input 
                                    type="text" 
                                    value={boardTitle} 
                                    placeholder="글제목" 
                                    onChange={e=> setBoardTitle(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea 
                                    name="" 
                                    id="" 
                                    value={boardText} 
                                    placeholder="글내용" 
                                    onChange={e=> setBoardText(e.target.value)}
                                >
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                <button type="submit">글쓰기</button>
            </form>
        </article>
    );
}

export default BoardWrit;