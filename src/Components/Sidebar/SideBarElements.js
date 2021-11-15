import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const BarContainer = styled.div`
    height:100vh;
    width:300px;
    border:1px solid black; //probably box shadow
    grid-area:sidebar;
    background:#8ea99b;
    position:sticky;
    top:0;
    left:0;
`
export const PostLinks = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin:0 auto;
    height:100%;
`
export const HomeLink = styled(Link)`
    font-size:2rem;
    text-decoration:none;
    color:black;
    padding:20px 20px;
    transition:all 0.3s ease-in-out;

    &:hover{
        background:black;
        color:white;
    }
`
export const PostLink = styled(Link)`
    text-decoration:none;
    color:black;
    padding:5px 20px;
    font-size:1.1rem;
    font-weight:300;
    border-bottom:1px solid black;
    transition:all 0.3s ease-in-out;


    &:nth-child(2){
        border-top:1px solid black;
    }
    &:hover{
        background:black;
        color:white;
    }
`