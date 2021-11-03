import React from 'react';
import './Thirdright.css';
import image_4 from '../images/4.svg';
import image_5 from '../images/5.svg';
import image_6 from '../images/6.svg';

function Thirdright() {
    return(
        <>
        <div className="third_text">
            <p>What will you learn?</p>
        </div>
        <div className="thrid_info">
            <p id="tp1">Opportunities in the Indian<br/>Tech ecosystem</p>
            <p id="tp2">Fintech dynamics in India</p>
            <p id="tp3">Understanding opportunities<br/>in tech</p>
        </div>
        <div className="pic4">
            <img src={image_4} height={115} width={115} />
        </div>
        <div className="pic5">
            <img src={image_5} height={115} width={115} />
        </div>
        <div className="pic6">
            <img src={image_6} height={115} width={115} />
        </div>
        </>
    );
};
export default Thirdright;
