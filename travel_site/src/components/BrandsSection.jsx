import React from 'react';
import styled from 'styled-components';

// Reusable BrandsSection component
const BrandsSection = ({ title, subtitle, brandImages }) => {
    return (
            <WrapperSection className="container brands-section  ">
                <h2 className="brands-title category-label text-center">
                    <i className="fas fa-handshake"></i> {title}
                </h2>
                <h2 className="brands-title category-title text-center">{subtitle}</h2>
                <div className="row justify-content-center brand-logos">
                    {brandImages.map((image, index) => (
                    <div className="col-6 col-md-2 mb-4" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                    ))}
                </div>
        </WrapperSection>
    );
};

export default BrandsSection;

// Styled component for WrapperSection
const WrapperSection = styled.section`
        margin-top: 6em;
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

    .brands-section {
    text-align: center;
    padding: 60px 20px;
    }
    .brands-title {
        color: #1e1e50;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .brand-logos img {
        max-width: 120px;
        filter: grayscale(100%);
        transition: 0.3s;
    }
    .brand-logos img:hover {
        filter: grayscale(0%);
        transform: scale(1.1);
    }

`;
