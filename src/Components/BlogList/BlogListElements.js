import styled from 'styled-components';

export const ListContainer = styled.div`
    background:transparent;
    height:100vh;
`
export const BlogSVG = styled.svg`
    position:absolute;
    width:100%;
    height:100vh;
    z-index:-1;
`
export const BlogRect = styled.rect`
    width:40%;
    height:100%;
    fill:#697d73;
`
export const ListWrapper = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center; //Up Down
    align-items:center;
`
export const ListItem = styled.div`
    display:grid;
    margin:15px 0;
    grid-template-columns: 66.7% 33.3%;
    grid-template-rows: 125px;
    width:60%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 3px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`
export const ListTitle = styled.div`
    color:white;
    background:#697d73;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.8rem;
    border-right:1px solid rgba(6, 24, 44, 0.4);
    font-weight:600;
`
export const ListDate = styled.div`
    color:black;
    background:#8ea99b;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-family:'PT MONO'
`