import React from 'react'
import styled from 'styled-components'

const EasyAndFast = () => {
    return (
        <WrapperSection className="container">
            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6">
                    <h6 className="text-primary fw-bold category-label">
                        <i className="fas fa-bolt"></i> Easy and Fast
                    </h6>
                    <h1 className="fw-bold" style={{color:'#181E4B'}}>Book Your Next Trip<br />In 3 Easy Steps</h1>
                    <div className="d-flex align-items-start mt-4">
                        <div className="step-icon yellow me-3">
                            &#x25A1;
                        </div>
                        <div >
                            <h5 className="fw-bold" style={{color:'#181E4B'}} >Choose Destination</h5>
                            <p  style={{color:'#181E4B'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start mt-4">
                        <div className="step-icon red me-3">
                            &#x1F4B3;
                        </div>
                        <div>
                            <h5 className="fw-bold" style={{color:'#181E4B'}}>Make Payment</h5>
                            <p style={{color:'#181E4B'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start mt-4">
                        <div className="step-icon blue me-3">
                            &#x1F697;
                        </div>
                        <div>
                            <h5 className="fw-bold" style={{color:'#181E4B'}}>Reach Airport on Selected Date</h5>
                            <p style={{color:'#181E4B'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                {/* Right Content */}
                <div className="col-lg-6">
                    <div className="card-custom">
                        <img src="/images/rome.jpg" alt="travel pic" className="trip-image" />
                        <div className="mt-3">
                            <h5 className="fw-bold" style={{color:'#DF6951'}}><i className="fas fa-map"></i> Trip To Greece</h5>
                            <p  style={{color:'#181E4B'}}><i className="fas fa-calendar-alt" style={{color:'#DF6951'}}></i> 14-29 June | by Robbin Joe</p>
                            <p  style={{color:'#181E4B'}}><i className="fas fa-users" style={{color:'#DF6951'}}></i> 24 people going</p>
                        </div>
                    </div>
                    {/* Ongoing Trips */}
                    <div className="card-custom mt-3 d-flex align-items-center p-3">
                        <img src="./images/rome.jpg" width="50%" alt="" className="rounded-5 me-3" />
                        <div>
                            <h6 className=" fw-bold"  style={{color:'#181E4B'}}><i className="fas fa-spinner" style={{color:'#DF6951'}}></i> Ongoing</h6>
                            <h5 className="fw-bold" style={{color:'#DF6951'}}><i className="fas fa-map"></i> Trip to Rome</h5>
                            <div className="progress mt-2" style={{ height: '5px', width: '100px',  }}>
                                <div className="progress-bar" style={{ width: '40%'}}></div>
                            </div>
                            <small  style={{color:'#181E4B'}}>
                                <i className="fas fa-check-circle " style={{color:'#DF6951'}}></i> 40% completed
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperSection>
    );
}

export default EasyAndFast;

const WrapperSection = styled.section`
    .step-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: white;
        font-size: 20px;
    }
    .yellow { background-color: #FFD166; }
    .red { background-color: #F76C6C; }
    .blue { background-color: #118AB2; }
    .category-label {
        color: var(--text-color-00) !important;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .card-custom {
    border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background: white;
    }
    .progress-bar {
        background-color: #6c63ff;
    }
    .trip-image {
        border-radius: 15px;
        width: 100%;
        height: auto;
    }
`;
