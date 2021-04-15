import React, { useState, useEffect } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
import { Link } from "react-router-dom";

function GoogleBooks({book}) {  

    return (  
        <li key={book.id}>
            <Link to={{pathname: `/bookview/${book.id}`, state: {book} }}>
                <dl>
                    <dt><Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  </dt>
                    <dd>
                        <strong>{book.volumeInfo.title}</strong>
                        <span className="author">{book.volumeInfo.authors}</span>
                    </dd>
                </dl>
            </Link>
        </li>
    )  
}  
  
export default GoogleBooks;