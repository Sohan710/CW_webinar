import React from 'react';
import './Firstleft.css';

function Firstleft() {
    return (
        <> <hr
        style={{
            color: 'black',
            height: 2,
            marginTop: 170,
            width: 890
        }}
    />
            <div className="homepage">
                <div className="text1">
                    <p>Indian startups raised a record $17 Bn in Q3 of CY21. Tech-platforms like <br/>
                    Zomato are now creating wealth for Retail investors via their recent listing.</p>
                </div>
            </div>
            <div className="homepage1">
                <div className="text2">
                    <p>Several startups are expected to join this list within the coming year which <br/>
                    include Nykaa, Flipkart etc. 2021 marks coming of age of Indian Tech
                    <lb/> Companies.</p>
                </div>
            </div>
            <div className="homepage2">
                <div className="text3">
                    <p>Technology is set to change the way India operates. How can you benefit as an 
                    Investor?</p>
                </div>
            </div>
        </>
    );
};

export default Firstleft;