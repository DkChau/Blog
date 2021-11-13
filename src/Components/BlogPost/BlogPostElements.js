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
    /* color:white; */
    min-width:800px;
    background:#8ea99b;
    /* background:#697d73; */
    border:1px solid black;
    padding:80px 20px 0 20px;
    
`
export const BlogContent = styled.div`
    width:80%;
    margin:0 auto;
    margin-bottom: 40px;
`
export const BlogTitle = styled.div`
    font-size:2rem;
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
    padding:40px 0;
    border-top:2px solid black;
    border-bottom:2px solid black;
    border-width: 60;
    font-weight:400;
    margin: 0 auto;
    width:80%;
    position:relative;
    z-index:1;

    /* &:before{
        content : "";
        position: absolute;
        left    : 5%;
        bottom  : 0;
        height  : 1px;
        width   : 90%;
        border-bottom:2px solid black;
    }
    &:after{
        content : "";
        position: absolute;
        left    : 5%;
        top  : 0;
        height  : 1px;
        width   : 90%;
        border-bottom:2px solid black;
    } */

`
export const BlogDate = styled.div`
    font-size:1.1rem;
    font-weight:300;
`
export const LinkContainer = styled(Link)`
    width:20%;
    text-align:center;
    text-decoration:none;
    color:white;
    margin-top:100px;
    font-family:'pt mono';
    display:flex;
    height:100px;
    justify-content: center;
    align-items: center;

    &:hover{
        color:red;
    }
`
export const IconWrapper = styled.span`
    display:flex;
    font-size:1.5rem;
`
export const SingleLink = styled.span`
    font-size:1.8rem;
    display:flex;
    padding: 0 10px;
` 