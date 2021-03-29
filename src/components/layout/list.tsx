import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const List = () => {
    return (
        <article className="book_list">
            <h3 title="베스트셀러">베스트셀러</h3>
            <ul>
                <li>
                    <dl>
                        <Link to="/bookview">
                            <dt>책이미지</dt>
                            <dd>
                                <strong>영원에 관한 증명</strong>
                                <span className="author"></span>
                                <span className="price">12,900원</span>
                            </dd>
                        </Link>
                    </dl>
                </li>
            </ul>
        </article>
        
    );
}

export default List;
