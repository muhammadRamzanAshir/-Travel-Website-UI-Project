import {createGlobalStyle} from 'styled-components';



const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    /* General Styles */
    body{
        font-family: 'Poppins', sans-serif;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --main-color-00: #F1A501;
        --text-color-00: #DF6951;
        --text-color-01: #181E4B;
        --text-color-02:  #ffff;
    }
`;

export default GlobalStyles;