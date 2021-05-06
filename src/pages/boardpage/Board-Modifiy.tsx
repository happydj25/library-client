import React, { useEffect, useState } from 'react';
import {Link, NavLink, useLocation, withRouter} from 'react-router-dom';

const BoardModifiy = ({ history }) => {

    let boardData1:any = useLocation<any>();
    // const [inIndex, setInIndex] = useState<any>();

    // let a1 = boardData1.state.kokoa.title;
    // let a2 = boardData1.state.kokoa.txtContent;

    let a1,a2
    document.getElementById('title').value = a1;
    // let a2 = boardData1.state.kokoa.txtContent;

    // console.log(boardData1);
    

    // let [boardTitle, setBoardTitle] = useState<any>(a1);
    // let [boardYear, setBoardYear] = useState<any>(a2);
    let [boardTitle, setBoardTitle] = useState<any>('');
    let [boardYear, setBoardYear] = useState<any>('');

    // let boardTitle:any = boardData1.state.kokoa.title;
    // let boardYear:any = boardData1.state.kokoa.txtContent;

    // let [boardTitle, setBoardTitle] = useState<any>(boardData1.state.kokoa.title);
    // let [boardYear, setBoardYear] = useState<any>(boardData1.state.kokoa.txtContent);
    let [titleError, seTitleError] = useState<any>('');
    let [yearError, setYearError] = useState<any>('');

    // boardTitle(a1);
    // boardTitle(a1);
   
    // const resetForm = () => {
    //     setBoardTitle('');
    //     setBoardYear('');
    // };

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

    // const onSubmit = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();

    //     // let boardNum = JSON.parse(localStorage.getItem('board'));
    //     // console.log(boardNum);

    //     // let count = 0;
    //     // if (boardNum != null) {
    //     //     for(let i=1; i < boardNum.length+1; i++) {
    //     //         count = i ;
    //     //     }
    //     // }
        
    //         const kkk:any = {
    //             id: count+1,
    //             title :document.getElementById('title').value,
    //             txtContent :document.getElementById('txtContent').value,
    //             writDateTime: new Date().toLocaleString() ,
    //         };

    //         let a = [];
    //         a = JSON.parse(localStorage.getItem('board')) || [];
    //         a.push(kkk);

    //         localStorage.setItem('board', JSON.stringify(a));
    //         history.push('/boardlist');
        
    // };

    // 수정할 글의 id
    let boardModifiyId = boardData1.id;

    const onModifiy = () => {
        let boardData = JSON.parse(localStorage.getItem('board'));

        const modifiyBoard:any = {
            id: boardModifiyId,
            title :document.getElementById('title').value,
            txtContent :document.getElementById('txtContent').value,
            writDateTime: new Date().toLocaleString() ,
        };

        let index = -1;
        for ( var counter = 0; counter < boardData.length; counter++) {
            if ( boardData[ counter ].id == boardModifiyId ) {
                index = counter;
                boardData.splice(index,1,modifiyBoard); 
                console.log(boardData);

                // localStorage.setItem("board", JSON.stringify(boardData));
            }
        }
        // history.push('/boardlist');
    }

 
        
    return (
        <article className="board_list">
            <h3>게시글 수정하기</h3>
            <form onSubmit={onModifiy}>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    value={boardData1.state.kokoa.title}
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

                <button type="submit">수정하기</button>

            </form>
        </article>
    );
}

export default withRouter(BoardModifiy);

function inputFormHandler<T>() {
    throw new Error('Function not implemented.');
}
