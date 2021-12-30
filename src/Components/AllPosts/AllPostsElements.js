import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PostContainer = styled.div`
    width:100%;
    height:auto;
    min-height:100vh;
    background:#697d73;
    display:grid;
    grid-template-areas:    'sidebar post post'
                            'sidebar page page';
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 100px;
`
export const PostHeading = styled.div`
    text-align:center;
    font-size:3rem;
    background:#8ea99b;
    padding:1rem 0;
    border:3px solid black;
    margin:4rem 0;
    font-weight:500;
    font-family:'open sans';
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
export const PostWrapper = styled.div`
    width:60%;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    grid-area:post;
`
export const PageLinkWrapper = styled.div`
    width:10%;
    margin:0 auto;
    display:flex;
    justify-content: space-around;
    align-items:center;
    grid-area:page;
`
export const LinkHeader = styled.span`
`
export const PageLink = styled(Link)`
    min-width:13px;
    text-align:center;
    text-decoration:none;
    color:black;

    &:hover{
        text-decoration:underline;
        text-decoration-thickness: 2px;
    }
    &.active{
        color:white;
    }

`