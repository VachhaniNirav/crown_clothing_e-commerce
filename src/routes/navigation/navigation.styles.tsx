import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background: #e0e0e0;
    position: fixed; 
    top: 0; 
    left: 0; 
    z-index: 100;
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.4)
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 17px;
`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 55%;
    }
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }    
`
