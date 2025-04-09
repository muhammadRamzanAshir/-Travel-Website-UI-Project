import React from "react";
import styled from "styled-components";

const TestimonialSlider = ({ testimonials }) => {
    return (
        <WrapperTesti id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <div className="testimonial-card text-center p-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="testimonial-img rounded-circle mb-3 img-fluid"
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                            <p className="testimonial-content text-wrap" style={{margin:'2em',color:'#181E4B' }}>
                                <i className="fas fa-quote-left me-2" style={{color:'#DF6951' }}></i>
                                {testimonial.content}
                                <i className="fas fa-quote-right ms-2" style={{color:'#DF6951' }}></i>
                            </p>
                            <p className="testimonial-author fw-bold">
                                <i className="fas fa-user me-1" style={{color:'#DF6951' }}></i>
                                {testimonial.author}
                            </p>
                            <p className="testimonial-location " style={{color:'#181E4B' }}>
                                <i className="fas fa-map-marker-alt me-1" style={{color:'#DF6951' }}></i>
                                {testimonial.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon d-none d-md-block" aria-hidden="true">
                    <i className="fas fa-chevron-left fa-2x text-dark"></i>
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon d-none d-md-block" aria-hidden="true">
                    <i className="fas fa-chevron-right fa-2x text-dark"></i>
                </span>
                <span className="visually-hidden">Next</span>
            </button>
        </WrapperTesti>
    );
};

export default TestimonialSlider;

// Responsive Styles
const WrapperTesti = styled.div`
    .carousel-inner {
        padding: 4em 1em;

        @media (min-width: 768px) {
            padding: 6em 4em;
        }

        @media (min-width: 1200px) {
            padding: 8em;
        }
    }

    .testimonial-card {
        background: white;
        padding: 2em;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        max-width: 600px;
    }

    .testimonial-content {
        font-size: 1rem;
        color: #333;
    }

    .testimonial-author {
        font-weight: bold;
        margin-top: 10px;
        color: #1e1e50;
    }

    .testimonial-location {
        font-size: 0.875rem;
        color: #777;
    }
`;
