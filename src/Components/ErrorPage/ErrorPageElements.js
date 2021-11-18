import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ErrorContainer = styled.div`
    width:100%;
    height:100%;
    background:#8ea99b;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`
export const ErrorHeader = styled.h1`
    font-size:10rem;
`
export const ErrorText = styled.h2`
    font-size:1.5rem;
`
export const ErrorLink = styled(Link)`
    margin:10px 0;
    color:black;
    text-decoration:none;
    font-size:1.1rem;
    padding:2px 5px;
    border:3px solid black;
    background:#697d73;

    &:hover{
        color:white;
        border-color:white;
    }
`