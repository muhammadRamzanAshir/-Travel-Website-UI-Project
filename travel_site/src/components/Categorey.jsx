import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FaCloudSun, FaPlane, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const Categorey = () => {
    const services = [
        {
            Icon: FaCloudSun,
            title: 'Calculated Weather',
            description: 'Built Wicket longer admire do barton vanity itself do in it.',
        },
        {
            Icon: FaPlane,
            title: 'Best Flights',
            description: 'Engrossed listening. Park gate sell they west hard for the.',
        },
        {
            Icon: FaMapMarkerAlt,
            title: 'Local Events',
            description: 'Barton vanity itself do in it. Prefer to men it engrossed listening.',
        },
        {
            Icon: FaCogs,
            title: 'Customization',
            description: 'We deliver outsourced aviation services for military customers.',
        },
    ];

    return (
        <CategoreyMainSection>
            <section className='category-section text-center'>
                <p className='category-label'><FontAwesomeIcon  icon={faTags} />  CATEGORY</p>
                <h2 className='category-title'>We Offer Best Services</h2>
            </section>
            <div className='container'>
                    <div className='row justify-content-center mb-10'>
                        {services.map((services, index)=> (
                            <ServiceCard
                                key={index}
                                {...services}
                            />
                        ))}
                    </div>
                </div>
        </CategoreyMainSection>
    )
}

export default Categorey;

const CategoreyMainSection = styled.div`
    margin-bottom: 13em;
        .category-label{
            position: relative;
        }
        /* .category-label::before{
            content: '';
            width: 8%;
            height: 5px;
            background-color: var(--text-color-00);
            position: absolute;
            bottom: -6px;
            left: 44%;
            border-radius: 20px;
            transition: .4s ease-in;
        } */
    .container{
        margin-top: 50px;
    }
    .category-label{
        color: var(--text-color-00) !important;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .category-section{
        padding: 30px 0;
        margin-top: 12em;
    }
    .category-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 40px;
        color:var(--text-color-01)
    }
    .service-item {
        text-align: center;
        padding: 30px;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
    }
    
`;
