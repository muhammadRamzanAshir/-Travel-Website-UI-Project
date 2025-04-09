import React from 'react'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import ReusableButton from "./ReuseablButtons";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroSectionContainer>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <p className='text-uppercase text-warning fw-bold title-hero-01'>Best Destinations around the world</p>
                            <h1 className='hero-title'>Travel,<HeroSectionTextSpan className='h1-hero-title'>Enjoy</HeroSectionTextSpan><br></br>and live a new and full life </h1>
                            <p className='hero-subtitle'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.</p>
                            <HeroGroupContainer>
                            <ReusableButton
                                className="text-nowrap"
                                label="Find out more"
                                icon={faInfoCircle}
                                color="var(--text-color-01)"
                                border="1px solid var(--text-color-01)"
                                hoverBg="var(--main-color-00)"
                                hoverColor="var(--text-color-02)"
                                hoverBorder="var(--main-color-00)"
                            />
                            <ReusableButton
                                className="text-nowrap"
                                label=" Play Demo"
                                icon={faPlay}
                                color="var(--text-color-02)"
                                bg="var(--main-color-00)"
                                border="1px solid var(--main-color-00)"
                                hoverBg="transparent"
                                hoverColor="var(--text-color-01)"
                                hoverBorder="var(--text-color-01)"
                            />
                            </HeroGroupContainer>
                        </div>
                        <HeroContainerImage className='col-lg-6 text-center'>
                            <img src="./images/hero.png" alt="" className='img-fluid hero-img' />
                        </HeroContainerImage>
                    </div>
                </div>
            </HeroSectionContainer>
        </HeroContainer>
    )
};

export default HeroSection;

const HeroContainer = styled.div`
    margin: 50px;
    .text-warning{
        color: var(--text-color-00);
    }
    .hero-title{
        font-size: 70px;
        font-weight: bold;
        color: var(--text-color-01);
    }
    .h1-hero-title{
        color: var(--text-color-00);
    }

    @media (max-width: 992px) {
        .hero-section {
            text-align: center;
        }
        .hero-img {
            margin-top: 20px;
        }
        .hero-title{
            font-size: 25px;
            text-transform: capitalize; 
        }
    }
`;

const HeroSectionContainer = styled.section`
    .hero-img {
        max-width: 100%;
        height: auto;
    }
    .HeroContainerImage{
        font-size: 20px;
        font-weight: 100;
        word-wrap: break-word;
    }
    .hero-subtitle {
        color: var(--text-color-01);
        font-size: 16px;
        margin-bottom: 20px;
        text-transform: capitalize; 
    }
`;

const HeroSectionTextSpan = styled.span`
    background: url('/images/Decore_1.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
`;

const HeroGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

const HeroContainerImage = styled.div`

`;