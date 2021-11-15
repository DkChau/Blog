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

    &.active{
        color:white;
    }

`