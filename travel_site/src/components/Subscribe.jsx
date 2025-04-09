import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subscribe = () => {
    return (
        <WrapperClass className='container subscribe-section position-relative'>
            <h2 className='fw-bold' style={{color:'#181E4B' }}>
                <i className="fas fa-envelope" style={{color:'#DF6951' }}></i> Subscribe to get information, latest news, and offers
            </h2>
            <p style={{color:'#181E4B' }}>
                <i className="fas fa-newspaper"  style={{color:'#DF6951' }}></i> Stay updated with Jadoo's latest news
            </p>
            <div className='d-flex justify-content-center mt-4'>
                <input
                    type="email"
                    className="form-control subscribe-input me-2"
                    placeholder="Your email"
                />
                <button className="subscribe-btn">
                    <i className="fas fa-paper-plane"></i> Subscribe
                </button>
            </div>

            {/* Floating Icon */}
            <div className="icon-btn">
                <i className="fas fa-paper-plane"></i>
            </div>
        </WrapperClass>
    );
};

export default Subscribe;

const WrapperClass = styled.div`
    background-color: #f9f6ff;
    margin-top: 10em;
    padding: 50px 20px;
    border-radius: 20px;
    text-align: center;
    max-width: 800px;
    position: relative;

    .subscribe-btn {
        background: #DF6951;
        border: none;
        color: white;
        font-weight: bold;
        padding: 12px 30px;
        transition: .3s ease;
        border-radius: 10px;
    }
    .subscribe-btn:hover{
        background-color: #df6951b4;
    }
    .subscribe-input {
        border-radius: 10px;
        padding: 12px;
        width: 100%;
        max-width: 400px;
    }

    .icon-btn {
        position: absolute;
        top: -25px;
        right: -25px;
        background: #6a5acd;
        color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;
