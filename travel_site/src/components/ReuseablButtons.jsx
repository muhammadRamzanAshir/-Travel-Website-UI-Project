import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ReuseableButtons  = ({href="#", icon, label, iconPosition='left', ...styleProps}) => {
    return (
        <StyledButton href={href} {...styleProps}>
            {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} />}
            {label}
            {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} />}
        </StyledButton>
    );
};

export default ReuseableButtons;
const StyledButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding:        ${({ padding })    => padding      || '8px 20px'};
    font-size:      ${({ fontSize })   => fontSize     || '14px'};
    font-weight:    ${({ fontWeight }) => fontWeight   || 500};
    color:          ${({color})        => color        || '#000'};
    background:     ${({bg})           => bg           || 'transparent'};
    border:         ${({border})       => border       || '1px solid transparent'};
    border-radius:  ${({radius})       => radius       || '20px'};
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color:    ${({hoverBg})          => hoverBg          || 'transparent'};
        color:               ${({hoverColor})       => hoverColor       || '#000'};
        border-color:        ${({hoverBorder})      => hoverBorder || 'transparent'};
    }
`;