import React from 'react';
import './Secondright.css';
import Ck from '../images/CK.svg';
import { AiFillLinkedin } from "react-icons/ai";
function Secondright() {
    return (
        <> 
            <div className="ck">
                  <img src={Ck} height={300} width={350} />
                  <a href="https://www.linkedin.com/in/chinmaykulkarni" target="_blank"><AiFillLinkedin size="50px" color='#2867B2' id="icon"/></a>
                  <br />
            </div>
            <div className="text_center">
                <p>Chinmay Kulkarni, CIO</p>
                <p id="tx3">Cambridge Wealth</p>
            </div>
            
            <div className="center_text">
                <p>Over 16 years of Capital Markets<br/>experience with Global Investment<br/>banking, based in NY and London.</p>
                <p className="tx4">Managed over 10,000 Cr Client assets.<br/>Responsible for Strategy and Product<br/>and at CW.</p>
            </div>
            

        </>
    );
};

export default Secondright;