import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const NavItem = ({icon, label, href }) => {
    return (
        <StyledSection>
            <li className="nav-item">
                <a href="{href}" className="nav-link">
                    <StyledSpan>
                        <FontAwesomeIcon icon={icon}/>
                    </StyledSpan>
                    {label}
                </a>
            </li>
        </StyledSection>
    );
};

export default NavItem;

const StyledSpan = styled.span`
    margin-right: 10px;
`;
const StyledSection = styled.section`
    .nav-item{
        .nav-link{
            font-size: 16px;
            font-weight: 550;
            margin: 0 10px;
            color: var(--text-color-01);
        }
        .nav-link:hover{
            color: var(--text-color-00);
            transition: .5s ease-in;
        }
        .nav-link::before{
            content: '';
            width: 0%;
            height: 2px;
            background-color: var(--text-color-00);
            position: absolute;
            bottom: 30%;
            transition: .4s ease-in;
        }
        .nav-link:hover::before{
            width:30px;
        }
        @media (max-width: 992px){
            .nav-link::before{
                display: none;
            }
            .nav-link{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

