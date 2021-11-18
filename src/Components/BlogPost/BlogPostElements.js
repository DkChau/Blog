import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const BlogContainer = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
    background:#697d73;
    display:flex;
`
export const BlogContentWrapper = styled.div`
    width:60%;
    margin:0 auto;
    height:100%;
    min-height:100vh;
    color:black;
    min-width:50rem;
    background:#8ea99b;
    border:1px solid black;
    padding:5rem 1.25rem 0 1.25rem;
    
`
export const BlogContent = styled.div`
    width:80%;
    margin:0 auto;
`
export const ContentRow = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    width:100%;
`
export const BlogTitle = styled.div`
    font-size:2.8rem;
    font-weight:700;
`
export const BlogAuthor = styled.div`
    font-size:1.3rem;
    font-weight:500;
`
export const BlogText = styled.div`
    white-space:pre-line;
    font-size:1.3rem;
    font-family:'open sans';
    padding:3.125rem 0 3.125rem 0;
    border-bottom:2px solid black;
    font-weight:400;
    margin: 0 auto;
    width:80%;
    position:relative;
    z-index:1;

`
export const BlogDate = styled.div`
    font-size:1.1rem;
    font-weight:300;
    justify-self:end;
`
export const LinkContainer = styled(Link)`
    width:20%;
    text-align:center;
    text-decoration:none;
    color:black;
    margin-top:6.25rem;
    font-family:'pt mono';
    display:flex;
    height:6.25rem;
    justify-content: center;
    align-items: center;
    transition:color 0.3s ease-in-out;

    &:hover{
        color:white;
    }
`
export const IconWrapper = styled.span`
    display:flex;
    font-size:1.5rem;
`
export const SingleLink = styled.span`
    font-size:1.8rem;
    display:flex;
    padding: 0 .625rem;


` 