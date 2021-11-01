import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../images/white_logo.svg';
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
                        <LogoSvg /> Cambridge 
                                    Wealth 
                        
                    </Link>
                    {/* <div className='menu-icon'>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
