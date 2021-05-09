import React, { useState } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

const BoardModifiy = () => {

    let boardData1:any = useLocation<any>();

    const history = useHistory();

    // 현재페이지 링크 찾아오기
    let info = boardData1.pathname;
    // 링크에서 필요없는 부분 삭제
    let thisBoardId = info.replace('/boardmodifiy/',''); 

    // localstorage에 저장되어있는 현재 글목록 데이터 가져오기
    let boardNum = JSON.parse(localStorage.getItem('board') || '');

    // 현재 글 페이지 요소 찾기
    let index = -1;
    for (let counter = 0, cnt = boardNum.length; counter < cnt; counter++) {
        if ( boardNum[ counter ].id == thisBoardId ) {
            index = counter;
        }
    }

    const [boardTitle, setBoardTitle] = useState<any>(boardNum[index].title);
    const [boardTxtContent, setBoardTxtContent] = useState<any>(boardNum[index].txtContent);
    const [titleError, seTitleError] = useState<any>('');
    const [contentError, setContentError] = useState<any>('');

    const resetErrors = () => {
        seTitleError('');
        setContentError('');
    };

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if (!boardTitle) {
            seTitleError('글제목을 넣어주세요');
            validated = false;
        }
        if (!boardTxtContent) {
            setContentError('글내용을 넣어주세요');
            validated = false;
        }
        return validated;
    };

    const onModifiy = (event: { preventDefault: () => void; }) => {

        event.preventDefault();
        validateForm();
        const modifiyBoard:any = {
            id: thisBoardId,
            title :boardTitle,
            txtContent :boardTxtContent,
            writDateTime: new Date().toLocaleString() ,
        };

        // 수정전 데이터 삭제하고 수정한 값 넣어주기 
        boardNum.splice(index,1,modifiyBoard);
        localStorage.setItem("board", JSON.stringify(boardNum));
        history.push('/boardlist');
    }

 
        
    return (
        <article className="board_list">
            <h3>게시글 수정하기</h3>
            <form onSubmit={onModifiy}>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    value={boardTitle}
                    placeholder="글제목"
                    onChange={(e) => setBoardTitle(e.target.value)}
                />
                <br />
                <div style={{color: 'red'}}>{titleError}</div>

                <textarea 
                    cols={30} 
                    rows={10}
                    id="txtContent"
                    name="txtContent"
                    value={boardTxtContent}
                    placeholder="글내용"
                    onChange={(e) => setBoardTxtContent(e.target.value)}
                 />            
                <br />
                <div style={{color: 'red'}}>{contentError}</div>

                <button type="submit">수정하기</button>

            </form>
        </article>
    );
}

export default withRouter(BoardModifiy);
