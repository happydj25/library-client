import React, { useState } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  

function GoogleBooksSearch() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyDZwzw4URlx0WQROZMDP3s13U68kNsPoMk")  
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            {/* <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '10px' }}>  
  
                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                <Card.Body>  

                                book.volumeInfo.imageLinks
                                    <h5 className="card-title">{{Card title}}</h5>  
                                    <a className="btn btn-primary">Know more</a>  
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>   */}

            <ul>
            {result.map(book => (  
                <li>
                    <dl>
                        {/* <Link to="/bookview"> */}
                            <dt><Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  </dt>
                            <dd>
                                <strong>{book.volumeInfo.title}</strong>
                                <span className="author">{book.volumeInfo.authors}</span>
                                <span className="price">{book.saleInfo.listPrice.amount}</span>
                            </dd>
                        {/* </Link> */}
                    </dl>
                </li>
                ))}  
            </ul>

        </form>  
  
    )  
}  
  
export default GoogleBooksSearch;