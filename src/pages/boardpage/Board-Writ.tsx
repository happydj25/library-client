import React, { useState } from 'react';
import { withRouter} from 'react-router-dom';

const BoardWrit = ({history} : {history:any}) => {

    let [boardTitle, setBoardTitle] = useState<any>('');
    let [boardYear, setBoardYear] = useState<any>('');
    let [titleError, seTitleError] = useState<any>('');
    let [yearError, setYearError] = useState<any>('');

    const resetErrors = () => {
        seTitleError('');
        setYearError('');
    };

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if (!boardTitle) {
            seTitleError('글제목을 넣어주세요');
            validated = false;
        }
        if (!boardYear) {
            setYearError('글내용을 넣어주세요');
            validated = false;
        }
        return validated;
    };


    const goList = () => {
        history.push('/boardlist');
    };


    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        let boardNum = JSON.parse(localStorage.getItem('board') || '{}');

        let count = 0;
        if (boardNum != null) {
            // 첫번째 글이 아닐때
            let lastId = Number( boardNum[boardNum.length-1].id );
            count = lastId + 1;
        } else {
            // 첫번째 글일때
            count = 1;            
        }
        
        const kkk:any = {
            id: count,
            title :boardTitle,
            txtContent :boardYear,
            writDateTime: new Date().toLocaleString() ,
        };

        let a = [];
        a = JSON.parse(localStorage.getItem('board') || '{}');
        a.push(kkk);

        localStorage.setItem('board', JSON.stringify(a));
        history.push('/boardlist');
        
    };

 
        
    return (
        <article className="board_list">

                
            <h3>게시판 글쓰기</h3>
            <form onSubmit={onSubmit}>
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
                    id="txtContent"
                    name="txtContent"
                    value={boardYear}
                    placeholder="글내용"
                    onChange={(e) => setBoardYear(e.target.value)}
                 />            
                <br />
                <div style={{color: 'red'}}>{yearError}</div>
                
                <button type="submit">글쓰기</button>


            </form>
        </article>
    );
}

export default withRouter(BoardWrit);

function inputFormHandler<T>() {
    throw new Error('Function not implemented.');
}
