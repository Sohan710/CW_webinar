import React from 'react';
import './Firstleft.css';

function Firstleft() {
    return (
        <> <hr className="l1"
        style={{
            color: 'black',
            height: 2,
            marginTop: 90,
            width: 870,
            marginLeft:30
        }}
    />
            <div className="homepage">
                <div className="text1" id="txt1">
                    <p>Indian startups raised a record $17 Bn in Q3 of CY21. Tech-platforms like 
                    Zomato are now creating wealth for Retail investors via their recent listing.</p>
                </div>
            </div>
            <div className="homepage1">
                <div className="text2" id="txt2">
                    <p>Several startups are expected to join this list within the coming year which 
                    include Nykaa, Flipkart etc. 2021 marks coming of age of Indian Tech
                    Companies.</p>
                </div>
            </div>
            <div className="homepage2">
                <div className="text3" id="txt3">
                    <p>Technology is set to change the way India operates. How can you benefit as an 
                    Investor?</p>
                </div>
            </div>
        </>
    );
};

export default Firstleft;