import React from 'react';
import "./client.css";
import group from "../assests/Group500.png";

function Client() {
    return (
        <div className='client-container'>
            <h6 className='heading'>CLIENT'S FEEDBACK</h6>
            <h3 className='subheading'>PEOPLE SAY'S  ABOUT US!</h3>
            <p>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
                <br /> reproduced below for those interested. Sections Bonorum et Malorum original.</p>
            <h6 className='heading'>JANNAT TUMPA <span className='span'>- COO, AMERIMAR ENTERPRISES, INC.</span></h6>
            <div className='imagecontainer'>
                <img src={group} alt='Group Icon' />
            </div>
        </div>
    );
}

export default Client;
