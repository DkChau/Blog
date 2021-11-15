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
    padding:100px 0 70px 0;
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
export const BottomRow=styled.div`
    width:100%;
    margin-top:20px;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto;
`
export const Line = styled.span`
    width:95%;
    margin:0 auto;
    height:2px;
    background:black;
    justify-self:center;
    align-self:center;
`
export const ViewAll = styled(Link)`
    text-decoration:none;
    font-size:1.5rem;
    align-self:center;
    border:2px solid black;
    background:white;
    color:black;
    border-radius:15px;
    padding:3px 7px;

    &:hover{
        color:white;
        background:black;
        border:2px solid white;
    }
`