import React from 'react';
import styled from 'styled-components';
import TestimonialSlider from './TestimonialSlider';

const TestimonialSection = () => {

    const testimonials = [
        {
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            content:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            author: "Mike Taylor",
            location: "Lahore, Pakistan",
        },
        {
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            content:"“This service is amazing. It has changed how we work. Highly recommend to everyone!”",
            author: "Sarah Khan",
            location: "Karachi, Pakistan",
        },
        {
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            content:"“A truly wonderful experience from start to finish. I’ll definitely use this again.”",
            author: "Ali Raza",
            location: "Islamabad, Pakistan",
        },
    ];

    return (
        <WrapperSection className="container testimonial-section">
            <div className="row align-items-center">
                <div className="col-md-12 text-center mb-4">
                    <h2 className="testimonial-text category-label">
                        <i className="fas fa-info-circle"></i> About Us
                    </h2>
                    <h2 className="testimonial-text"  style={{color:'#181E4B'}}>What People Say About Us.</h2>
                </div>
                <TestimonialSlider testimonials={testimonials} />
            </div>
        </WrapperSection>
    );
};

export default TestimonialSection;

// Styled component for WrapperSection
const WrapperSection = styled.section`
    margin-top: 12em;
    .category-label{
        color: var(--text-color-00) !important;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .category-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 40px;
    }
    .testimonial-section {
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding: 60px 20px; */
    }
    .testimonial-text {
        color: #1e1e50;
        font-weight: 700;
    }
    .testimonial-card {
        background: white;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        position: relative;
    }
    .testimonial-card img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        top: -30px;
        left: -30px;
        border: 4px solid white;
    }
    .testimonial-content {
        font-size: 16px;
        color: #4f4f4f;
    }
    .testimonial-author {
        margin-top: 15px;
        font-weight: 700;
        color: #1e1e50;
    }
    .testimonial-location {
        font-size: 14px;
        color: #7a7a7a;
    }

`;
