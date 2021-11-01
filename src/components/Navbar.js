import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../images/Cambridge - Horizontal - White.svg';
import FirstLeft  from '../components/Firstleft';
// import './fonts/BegumSans-Medium.ttf'
// import './fonts/BegumSans-Bold.ttf'
// import './fonts/BegumSans-Light.ttf'
// import './fonts/BegumSans-Regular.ttf'
// import './fonts/BegumSans-SemiBold.ttf'
import './Navbar.css'
// import { Button } from './Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    
    window.addEventListener('resize', showButton);
    useEffect(() => {
        showButton();
    }, []);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <LogoSvg />
                    </Link>
                </div>
                <div className="navbar-text">
                    <p>Making Performance Investing Easy,</p>
                    <p id="p1">Accessible and Transparent</p>
                </div>
                
            </nav>
            <nav className="headertext">
                <div className="head-text">
                    <p>A Deep Dive Into</p>
                    <p id="t1">Investing in the Indian Tech Story</p>
                    
                </div>
            </nav>
            <FirstLeft />
            {/* <nav className="homepage">
                <div className="text1">
                    <p>Indian startups raised a record $17 Bn in Q3 of CY21. Tech-platforms like <br/>
                    Zomato are now creating wealth for Retail investors via their recent listing.</p>
                </div>
            </nav>
            <nav className="homepage1">
                <div className="text2">
                    <p>Several startups are expected to join this list within the coming year which <br/>
                    include Nykaa, Flipkart etc. 2021 marks coming of age of Indian Tech.
                    <lb/> Companies.</p>
                </div>
            </nav>
            <nav className="homepage2">
                <div className="text3">
                    <p>Technology is set to change the way India operates. How can you benefit as an <br/> 
                    Investor?</p>
                </div>
            </nav> */}
        </>
    )
    
}

export default Navbar
