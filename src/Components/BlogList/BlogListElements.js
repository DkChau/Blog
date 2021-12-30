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
    padding:6.25rem 0 4.375rem 0;
`
export const ListHeader = styled.div`
    font-size:4rem;
    text-align:center;
    padding-bottom:.313rem;
    border-bottom:7px solid black;
    margin-bottom:2.813rem;
    font-weight:500;
    align-self:flex-start;
`
export const BottomRow=styled.div`
    width:100%;
    margin-top:1.25rem;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto;
`
export const Line = styled.span`
    width:95%;
    margin:0 auto;
    height:.125rem;
    background:black;
    justify-self:center;
    align-self:center;
`
export const ViewAll = styled(Link)`
    text-decoration:none;
    font-size:1.2rem;
    align-self:center;
    border:.125rem solid black;
    background:white;
    color:black;
    border-radius:.313rem;
    padding:.125rem .313rem;
    transition:all 0.15s ease;

    &:hover{
        transform:scale(1.04);
    }
`