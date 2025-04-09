import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Importing Navbar
import GlobalStyles from './components/GlobalStyles';  // Global styles if any
import styled from 'styled-components';
import HeroSection from './components/HeroSection'
import Categorey from './components/Categorey';
import Destination from './components/Destination';
import EasyAndFast from './components/EasyAndFast';
import Testimonialsection from './components/Testimonialsection.jsx';
import BrandsSection from './components/BrandsSection.jsx';
import Subscribe from './components/Subscribe.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const brandImages = [
    { src: './images/brands.png', alt: 'Brand 1' },
    { src: './images/brands.png', alt: 'Brand 2' },
    { src: './images/brands.png', alt: 'Brand 3' },
    { src: './images/brands.png', alt: 'Brand 4' },
    { src: './images/brands.png', alt: 'Brand 5' },
  ];
  return (  
    <>
    <GlobalStyles/>
    <MainContainer className='container-fluid'>
      <StyledContainer className="container">
        <Navbar />  
        <HeroSection/>
        <Categorey/>
        <Destination/>
        <EasyAndFast/>
        <Testimonialsection/>
        <div>
          <BrandsSection
            title="OUR CLIENTS"
            subtitle="Meet Our Clients"
            brandImages={brandImages}
          />
        </div>
        <Subscribe/>
        <Footer/>
      </StyledContainer>
    </MainContainer>
    </>
  );
}

export default App;

const MainContainer   = styled.div`
    background-image: url('/images/Decore.png');
    height: 100vh;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
`;
const StyledContainer = styled.div``;