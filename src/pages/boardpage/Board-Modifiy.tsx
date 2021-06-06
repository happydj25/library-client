import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, NavLink, useLocation, withRouter} from 'react-router-dom';

const BoardModifiy = ({history} : {history:any}) => {

    let boardData1:any = useLocation<any>();
    console.log('boardData1:' + JSON.stringify(boardData1.state.data));

    // // 현재페이지 링크 찾아오기
    // let info = boardData1.pathname;
    // // 링크에서 필요없는 부분 삭제
    // let thisBoardId = info.replace('/boardmodifiy/',''); 

    // // localstorage에 저장되어있는 현재 글목록 데이터 가져오기
    // let boardNum = JSON.parse(localStorage.getItem('board'));

    // // 현재 글 페이지 요소 찾기
    // let index = -1;
    // for ( var counter = 0; counter < boardNum.length; counter++) {
    //     if ( boardNum[ counter ].id == thisBoardId ) {
    //         index = counter;
    //     }
    // }

    // let [boardTitle, setBoardTitle] = useState<any>(boardNum[index].title);
    // let [boardTxtContent, setBoardTxtContent] = useState<any>(boardNum[index].txtContent);
    // let [titleError, seTitleError] = useState<any>('');
    // let [contentError, setContentError] = useState<any>('');

    

    

    // const resetErrors = () => {
    //     seTitleError('');
    //     setContentError('');
    // };
    // const validateForm = () => {
    //     seTitleError();
    //     let validated = true;
    //     if (!boardTitle) {
    //         seTitleError('글제목을 넣어주세요');
    //         validated = false;
    //     }
    //     if (!boardTxtContent) {
    //         setContentError('글내용을 넣어주세요');
    //         validated = false;
    //     }
    //     return validated;
    // };


    let [boardTitle, setBoardTitle] = useState<any>(boardData1.state.data.board_title);
    let [boardText, setBoardText] = useState<any>(boardData1.state.data.board_text);

    // setBoardTitle(boardData1.state.data.board_title);
    // setBoardText(boardData1.state.data.board_text);

    // const onModifiy = (event: { preventDefault: () => void; }) => {

    //     event.preventDefault();
    //     // validateForm();
    //     axios.get('http://localhost:4000/api/insert', {
    //         // board_no: 5,
    //         board_title: boardTitle,
    //         board_text: boardText,
    //         // reg_dt: 'regDt'
    //     }).then(() => {
    //         alert('successful insert')
    //     });
        

    //     // 수정전 데이터 삭제하고 수정한 값 넣어주기 
    //     // boardNum.splice(index,1,modifiyBoard);
    //     // localStorage.setItem("board", JSON.stringify(boardNum));
    //     // history.push('/boardlist');
    // }

    const boardModifiy = (id:any) => {
        axios.put(`http://localhost:4000/api/update/${id}`, {board_title: boardTitle, board_text: boardText, board_no: id}).then((Response)=>{
        });
        history.push('/boardlist');
    }
        
    return (
        <article className="board_list">
            <h3>게시글 수정하기</h3>
            {/* <form onSubmit={onModifiy}> */}
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    value={boardTitle}
                    placeholder="글제목"
                    onChange={(e) => setBoardTitle(e.target.value)}
                />
                <br />
                {/* <div style={{color: 'red'}}>{titleError}</div> */}

                <textarea 
                    id="txtContent"
                    name="txtContent"
                    value={boardText}
                    placeholder="글내용"
                    onChange={(e) => setBoardText(e.target.value)}
                 />            
                <br />
                {/* <div style={{color: 'red'}}>{contentError}</div> */}

                <button type="button" onClick={()=>{boardModifiy(boardData1.state.data.board_no)}}>수정하기</button>

                {/* <button type="button" onClick={onModifiy}>글쓰기</button> */}

            {/* </form> */}
        </article>
    );
}

export default withRouter(BoardModifiy);
