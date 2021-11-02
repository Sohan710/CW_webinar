import React from 'react';
import './Secondright.css';
import Ck from '../images/CK.svg';
import { AiFillLinkedin } from "react-icons/ai";
function Secondright() {
    return (
        <> 
            <div className="ck">
                  <img src={Ck} height={300} width={350} />
                  <AiFillLinkedin size="50px" color='#2867B2' id="icon2"/>
                  <br />
            </div>
            <div className="text_center">
                <p>Chinmay Kulkarni, CIO</p>
                <p id="tx2">Cambridge Wealth</p>
            </div>
            
            <div className="center_text">
                <p>12+ years of experience with <br/>Oliphans Capital, Kelusa Capital<br/>& Antique.</p>
                <p className="tx3">Led early-stage rounds across<br/>ECom Express, Grab.in, Local<br/>Banya, HumourMe.</p>
            </div>
            

        </>
    );
};

export default Secondright;