import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReviewBtn from './Review_Btn';

const ReviewType2 = () => {
    return (
        <div className="type2">
            <ReviewBtn />
            <p>김민준</p>
            <div className="txt">
                도움되는 후기 잘읽었습니다.
            </div>
            <p className="date">2021-03-23 00:20:40</p>
        </div>       
    );
}

export default ReviewType2;
