import React, { useEffect, useState } from 'react';
import {Link, NavLink, useLocation, withRouter} from 'react-router-dom';

const BoardWrit = ({ history }) => {

    let boardData1:any = useLocation<any>();
    const [inIndex, setInIndex] = useState<any>();

    // let [boardTitle, setBoardTitle] = useState<any>(inIndex == true ? '' : boardData1.state.boardData1.title);
    // let [boardYear, setBoardYear] = useState<any>(inIndex == true ? '' : boardData1.state.boardData1.txtContent);
    let [boardTitle, setBoardTitle] = useState<any>(inIndex == true ? '' : '');
    let [boardYear, setBoardYear] = useState<any>(inIndex == true ? '' :  '');
    let [titleError, seTitleError] = useState<any>('');
    let [yearError, setYearError] = useState<any>('');
   
    useEffect(() => {
        //주소창이 /boardwrit 와 같으면 true, /boardwrit/ID 가 붙으면 false
        if (boardData1.pathname !== "/boardwrit") setInIndex(false);
        else setInIndex(true);
    }, [boardData1]); // <-- boardData1 의 변화만 감지한다


    const resetForm = () => {
        setBoardTitle('');
        setBoardYear('');
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

    const resetErrors = () => {
        seTitleError('');
        setYearError('');
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        let boardNum = JSON.parse(localStorage.getItem('board'));
        console.log(boardNum);

        // let count = 0;
        // if (boardNum != null) {
        //     for(let i=1; i < boardNum.length+1; i++) {
        //         count = i ;
        //     }
        // }
        
            const kkk:any = {
                id: count+1,
                title :document.getElementById('title').value,
                txtContent :document.getElementById('txtContent').value,
                writDateTime: new Date().toLocaleString() ,
            };

            let a = [];
            a = JSON.parse(localStorage.getItem('board')) || [];
            a.push(kkk);

            localStorage.setItem('board', JSON.stringify(a));
            history.push('/boardlist');
        
    };

 
        
    return (
        <article className="board_list">

                
            <h3>
                {inIndex 
                ? '게시판 글쓰기'
                : '게시글 수정하기'}
            </h3>
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
                    cols="30" 
                    rows="10"
                    id="txtContent"
                    name="txtContent"
                    value={boardYear}
                    placeholder="글내용"
                    onChange={(e) => setBoardYear(e.target.value)}
                 />            
                <br />
                <div style={{color: 'red'}}>{yearError}</div>

                {inIndex 
                ? <button type="submit">글쓰기</button>
                : <button type="submit">수정하기</button>}


            </form>
        </article>
    );
}

export default withRouter(BoardWrit);

function inputFormHandler<T>() {
    throw new Error('Function not implemented.');
}
