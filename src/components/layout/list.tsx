import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GoogleBooks from "./Googlebook"; 


const List = () => {
   
    // const [book, setBook] = useState<any>("");  
    const [result, setResult] = useState<any>([]);  


    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=행복")  
        .then(data => {  
            // console.log(data.data.items);  
            setResult(data.data.items);  
        })  
    }, []);

    

    const renderBooks = result.map((book: { id: {} | null | undefined; volumeInfo: { imageLinks: { thumbnail: string | undefined; } | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; authors: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; title: string | undefined; }) => {
        return (
            <GoogleBooks book={book} />
        )
    });



    return (
        <article className="book_list">
  
            <h3 title="베스트셀러">베스트셀러</h3>
            <ul>
                {renderBooks}
            </ul>
           
        </article>
        
    );
}

export default List;
