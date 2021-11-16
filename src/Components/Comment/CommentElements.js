import styled from 'styled-components';

export const CommentContainer = styled.div`
    height:auto;
    padding:1.25rem 0;
    display:flex;
    width:100%;
    flex-direction: column;
    align-items: flex-start;
`
export const CommentHeading = styled.div`
    width:100%;
    font-size:2rem;
    border-bottom:2px solid black;
`
export const CommentWrapper = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content:center;
    margin:1.25rem 0;
    width:100%;
    font-family:'Open Sans';
`
export const CommentDate = styled.div`
    align-self:end;
    justify-self:end;
    font-weight:600;
`
export const CommentName = styled.div`
    align-self:end;
    font-size:1.4rem;
    font-weight:600;
    color:black;
`
export const CommentText = styled.div`
    white-space:pre-line;
    font-family:'Open Sans';
    font-size:1.1rem;
    font-weight:300;
    /* background:white;
    color:black; */
`