import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #858585;
        border-radius: 100px;
    }

`