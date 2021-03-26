import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReviewType1 from './Review-Type1';
import ReviewType2 from './Review-Type2';


const ReviewList = () => {
    return (
        <div className="review">
            <h3>리뷰</h3>
            <ReviewType1 />
            <ReviewType2 />
            <ReviewType2 />
            <ReviewType1 />
        </div>      
    );
}

export default ReviewList;
