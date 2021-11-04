import React from 'react';
import './Thirdright.css';
import image_4 from '../images/4.svg';
import image_5 from '../images/5.svg';
import image_6 from '../images/6.svg';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
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
            <a href="https://in.linkedin.com/company/cambridge-wealth " target="_blank" ><SiLinkedin size="30px" /></a>
            </div>
            <div className="socal_icon2">
            <a href="https://www.instagram.com/cambridgewealth.india/?hl=en   " target="_blank" ><SiInstagram size="30px" /></a>
            </div>
            <div className="socal_icon3">
            <a href="https://twitter.com/cambridgewealt1  " target="_blank" ><SiTwitter size="30px"/></a>
            </div>
            <div className="socal_icon4">
            <a href="https://www.facebook.com/CambridgeWealth/  " target="_blank" ><SiFacebook size="30px"/></a>
            </div>
            <div className="socal_icon5">
            <a href=" " target="_blank" ><SiYoutube size="30px"/></a>
            </div>
        </>
    );
};
export default Thirdright;
