import React from 'react';
import './Thirdright.css';
import image_4 from '../images/4.svg';
import image_5 from '../images/5.svg';
import image_6 from '../images/6.svg';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';

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
        <div className="pic6">
            <img src={image_4} height={115} width={115} />
        </div>
        <div className="pic7">
            <img src={image_5} height={115} width={115} />
        </div>
        <div className="pic8">
            <img src={image_6} height={115} width={115} />
        </div>

        <div className="socal_icon1">
            <SiLinkedin size="30px" />
            </div>
            <div className="socal_icon2">
            <SiInstagram size="30px" />
            </div>
            <div className="socal_icon3">
            <SiWhatsapp size="30px"/>
            </div>
            <div className="socal_icon4">
            <SiFacebook size="30px"/>
            </div>
            <div className="socal_icon5">
            <SiYoutube size="30px"/>
            </div>
        </>
    );
};
export default Thirdright;
