import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './GlobalStyles';



const ServiceCard = ({Icon, title, description}) => {
    return (
        <CardCategorySection className='col-md-3'>
            <div className=' service-item service-highlighted text-center'>
                <div className='service-icon mb-3'>
                    <Icon className="icon" size={40} color={'#e76f51'} />
                </div>
                <h4 style={{fontSize: '24px', fontWeight: 'bold', color:'#181E4B'}}>{title}</h4>
                <p style={{ color:'#181E4B'}}>{description}</p>
            </div>
        </CardCategorySection>
    )
};

export default ServiceCard;

const CardCategorySection = styled.div`
    @media (max-width: 992px) {
        .service-item {
            margin-bottom: 30px;
        }
    }
    .service-icon:hover{
        color: #e76f51 ;
    }
    .service-highlighted{
        transition: 0.5s ease-in;
    }
    .service-highlighted:hover{
        background: #fff;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 40px;
        position: relative;
    }
    .service-highlighted:hover::before  {
        content: "";
        position: absolute;
        bottom: -15px;
        left: -15px;
        width: 40px;
        height: 40px;
        background-color: #e76f51;
        border-radius: 10px;
        z-index: -1;
    }
`;
