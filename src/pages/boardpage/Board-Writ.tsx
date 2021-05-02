import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const BoardWrit = () => {

    let boardData1 = useLocation<any>();
    const [inIndex, setInIndex] = useState<any>();

    let aTitle:any = boardData1.state.boardData1.title;
    let aTxtContent:any = boardData1.state.boardData1.txtContent;

    let a1:any = inIndex == true ? '' : aTitle;
    let a2:any = inIndex == true ? '' : aTxtContent;

    let [boardTitle, setBoardTitle] = useState<any>(a1);
    let [boardYear, setBoardYear] = useState<any>(a2);
    let [titleError, seTitleError] = useState<any>('');
    let [yearError, setYearError] = useState<any>('');
   
    useEffect(() => {
        //주소창이 /boardwrit 와 같으면 true, /boardwrit/ID 가 붙으면 false
        if (boardData1.pathname !== "/boardwrit") setInIndex(false);
        else setInIndex(true);
    }, [boardData1]); // <-- boardData1 의 변화만 감지한다

    // if (inIndex == 0) {
    //     // 글수정
    //     // let boardData2:any = boardData1.state.boardData1;

    //     // let boardData1 = useLocation();

    //     // let boardData1 = useLocation<any>();
        
    //     // console.log('고양이' + JSON.stringify(boardData2));
    //     document.getElementById("title").value = boardData1.state.boardData1.title;
    //     document.getElementById("txtContent").value = boardData1.state.boardData1.title;
    //     // setBoardTitle = boardData1.state.boardData1.title;
    //     // setBoardYear = boardData1.state.boardData1.txtContent;
    //     // console.log(setBoardTitle);
   

    // } else if (inIndex == 1) {
    //     // 새글쓰기

    //     let boardData1 = 'useLocation()';
        
    // }

    
   








    // console.log('정신차려'+ inIndex); 

    // 존재하는 글수정가면 false 나옴
    // 새글쓰기 true 나옴

    



    

    // if (useLocation<any>() == undefined) {
    //     console.log('boardData1 == undefined');
    //   } else {
    //       console.log('틀렸졍');
    //         // 바로글쓰기했는데 틀렸정나옴
    //           // let boardData1 = useLocation<any>();

    // // let boardData2 = boardData1.state.boardData1;
    // // console.log('고양이' + JSON.stringify(boardData2));
    //   }

    

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

    
//     var keys = Object.keys(localStorage);
//     keys.forEach(key=>{
//      var json_str =localStorage.getItem(key)
//       try {
//           var abc:any = JSON.parse(json_str);
//           this.user = abc;
//        } catch (e) {
//        console.log(e)
//       }
//    })

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

            // let boardID:number = Object.keys(a).length;

            const kkk:any = {
                id: new Date().getTime() + new Date().getMilliseconds(),
                title :document.getElementById('title').value,
                txtContent :document.getElementById('txtContent').value,
                writDateTime: new Date().toLocaleString() ,
            };

            let a = [];
            a = JSON.parse(localStorage.getItem('board')) || [];
            a.push(kkk);

            localStorage.setItem('board', JSON.stringify(a));
            window.location.href = "/boardlist";



        
        // localStorage.setItem('board', JSON.stringify([kkk]));
          

        // if (validateForm()) {

        //     localStorage.setItem("Board", JSON.stringify({ '글제목': boardTitle, '글내용': boardYear }));
        //     // addBoard({
        //     //     id: Date.now(),
        //     //     title: boardTitle,
        //     //     year: boardYear,
        //     // });
        //     resetErrors();
        //     resetForm();
        // }

        
    };

    // inputFormHandler<any>(){
    //     setState({[e.target.name]:e.target.value});
    // };
    
    let handleChange:any = (e: { target: { name: any; value: any; }; }) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
        
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
                    // onChange={this.handleChange()}
                    // onChange={event => setBoardTitle(e.target.value)}
                    onChange={(e) => setBoardTitle(e.target.value)}
                    // onChange={(e:any) => setBoardTitle<any>(e.target.value)}
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
                    // onChange={this.handleChange()}
                    // onChange={e => setBoardYear(e.target.value)}
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

export default BoardWrit;

function inputFormHandler<T>() {
    throw new Error('Function not implemented.');
}
