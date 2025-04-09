import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import DestinationCard from './ DestinationCard.jsx';

const Destination = () => {
    const destinations = [
            {
            image: 'images/rome.jpg',
            alt: 'Rome, Italy',
            title: 'Rome, Italy',
            price: '$5.42k',
            duration: 10,
            },
            {
            image: 'images/rome.jpg',
            alt: 'London, UK',
            title: 'London, UK',
            price: '$4.2k',
            duration: 12,
            },
            {
            image: 'images/rome.jpg',
            alt: 'Full Europe',
            title: 'Full Europe',
            price: '$15k',
            duration: 28,
            },
        ];
    return (
        <WrapperSection className='destinations-section text-center'>
            <p className='category-label'><i className='fas fa-fire'></i> Top Selling</p>
            <h1 className='category-title' style={{color:'#181E4B'}}>Top Destinations</h1>
            <DestcontainerDestination className='container'>
                <div className='row justify-content-center'>
                    {destinations.map((dest, index)=>(
                        <DestinationCard
                            key={index}
                            {...dest}
                        />
                    ))}
                </div>
            </DestcontainerDestination>
        </WrapperSection>
    );
}

export default Destination;

const WrapperSection = styled.section`
    margin-bottom: 12em;
    background: #fff;
    text-align: center;
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
`;

const DestcontainerDestination = styled.div``;