import React from 'react';
import './Secondleft.css';
import image_4 from '../images/Mohit_Gulati.svg';
import image_5 from '../images/Satwik_Jain.svg';
import { IconName } from "react-icons/";
import { AiFillLinkedin } from "react-icons/ai";
function Secondleft() {
    return (
        <>
            <div className="pic4">
                <img src={image_4} height={300} width={350} />
                <a href="https://www.linkedin.com/in/mg04" target="_blank">    <AiFillLinkedin size="50px" color='#2867B2' id="icon1"/></a>
            </div>
            <div className="text_data">
                <p>Mohit Gulati, CIO</p>
                <p id="tx1">ITI Growth Opps</p>
            </div>
            <div className="pic5">
                <img src={image_5} height={300} width={350} />
                <a href="https://www.linkedin.com/in/satwikjain22" target="_blank"><AiFillLinkedin size="50px" color='#2867B2' id="icon2"/></a>
            </div>
            <div className="text_data1">
                <p>Satwik Jain, Fund Manager</p>
                <p id="tx2">RH Perennial</p>
            </div>

            <div className="left_text">
                <p>12+ years of experience with <br/>Oliphans Capital, Kelusa Capital<br/>& Antique.</p>
                <p className="tx3">Led early-stage rounds across<br/>ECom Express, Grab.in, Local<br/>Banya, HumourMe.</p>
            </div>

            <div className="right_text">
                <p>Previously managed Equity & Alt. <br/>assets at Client Associates which<br/>advised over INR 25000 Crs.</p>
                <p className="tx4">Co-founded 'fitnessholic.com'<br/>aggregating over 150 fitness<br/>centers on its platform.</p>
            </div>

        </>
    );
};

export default Secondleft;