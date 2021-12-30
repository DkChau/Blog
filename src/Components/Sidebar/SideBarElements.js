import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const BarContainer = styled.div`
    height:100vh;
    width:18.75rem;
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
export const PostText = styled.span`
    display:flex;
    transition: all 0.15s ease;
    width:50%;
`
export const HomeLink = styled(Link)`
    font-size:2rem;
    text-decoration:none;
    color:black;
    padding:1.25rem 1.25rem;
    transition:all 0.15s ease-in-out;

    &:hover{
        ${PostText}{
            transform:translateX(4rem);
        }
        color:white;
    }
`
export const PostLink = styled(Link)`
    text-decoration:none;
    color:black;
    padding:.75rem 1.25rem;
    font-size:1.1rem;
    font-weight:300;
    border-bottom:2px solid black;
    display:flex;

    &:nth-child(2){
        border-top:2px solid black;
    }
    &:hover{
        color:white;
        ${PostText}{
            transform:translateX(4rem);
        }
    }
`