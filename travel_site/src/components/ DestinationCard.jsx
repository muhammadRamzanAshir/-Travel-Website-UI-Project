import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const  DestinationCard = ({image, alt, title, location, price, days, duration}) => {
    return (
        <CardWrapper className='col-md-4'>
            <div className='destination-card'>
                <img src={image} alt={alt} className='destination-img image-fluid' />
                <div className='destination-info'>
                    <h4 style={{color:'#181E4B'}}>{title}<span className='price'>{price}</span></h4>
                    <p style={{color:'#DF6951'}}>
                        <img src="images/location.png" alt="icon" className='icon' />
                        {duration} Day Trip
                    </p>
                </div>
            </div>
        </CardWrapper>
    )
}

export default  DestinationCard;

const CardWrapper = styled.div`
    .destination-card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
    padding-bottom: 15px;
    }
    .destination-card.active {
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
    }
    .destination-card:hover {
        transform: translateY(-10px);
    }
    .destination-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .destination-info {
        padding: 20px;
        text-align: left;
    }
    .destination-info h4 {
        font-size: 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .price {
        font-size: 16px;
        font-weight: bold;
        color: #e76f51;
    }
    .destination-info p {
        font-size: 14px;
        color: #6b7280;
        display: flex;
        align-items: center;
    }
    .icon {
        width: 16px;
        margin-right: 8px;
    }

    @media (max-width: 992px) {
        .destination-card {
            margin-bottom: 30px;
        }
    }
`;
