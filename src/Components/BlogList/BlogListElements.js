import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ListContainer = styled.div`
    background:transparent;
    height:100%;
`
export const BlogSVG = styled.svg`
    position:absolute;
    width:100%;
    height:calc(100% - 100vh);
    z-index:-1;
`
export const BlogRect = styled.rect`
    width:40%;
    /* height:100%; */
    fill:#697d73;
`
export const ListWrapper = styled.div`
    height:100%;
    width:60%;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    justify-content: center; //Up Down
    align-items:center;
    padding-top:100px;
`
export const ListHeader = styled.div`
    font-size:4rem;
    text-align:center;
    padding-bottom:5px;
    border-bottom:7px solid black;
    margin-bottom:45px;
    font-weight:500;
    align-self:flex-start;
`
export const ListItem = styled(Link)`
    display:grid;
    margin:15px 0;
    grid-template-columns: 66.7% 33.3%;
    grid-template-rows: 200px;
    width:100%;
    text-decoration:none;
    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 3px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
    border:2px solid black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    &:hover{
        box-shadow: #f5f5f5 0px 0px 0px 3px, #f5f5f5 0px 4px 6px -1px, #f5f5f5 0px 1px 0px inset;
    }

`
export const ListTextWrapper = styled.span`
    color:white;
    background:#697d73;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    font-size:1.8rem;
    font-weight:600;
`
export const ListText = styled.span`
    width:100%;
    font-size:1.2rem;
    font-weight:400;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    white-space:pre-line;
    padding: 9px 20px 0;
    font-family:'Open Sans';

`
export const ListTitle = styled.span`
    background: #F5F5F5;
    color:black;
    width:100%;
    text-align:center;
    padding:5px 0;
    font-weight:400;
    border-bottom:2px solid black;
`
export const ListInfoWrapper = styled.span`
    color:black;
    background:#8ea99b;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-family:'PT MONO';
    border-left:2px solid black;
`
export const ListDate = styled.span`
    margin:20px 0;
`
export const ListAuthor = styled.span`

`
export const ViewAll = styled(Link)`

`