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
    font-size:1.7rem;
    display:flex;
    flex-direction:column;
    padding:.625rem 0;
    font-family:'pt mono';
`
export const CommentWrapper = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content:center;
    padding:.875rem .875rem;
    width:100%;
    font-size:1.4rem;
    border-bottom:1px solid black;
    
`
export const CommentContent = styled.div`
    /* background:pink; */
    width:100%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`
export const CommentDate = styled.div`
    align-self:end;
    justify-self:end;
    font-size:1.2rem;
`
export const CommentName = styled.div`
    align-self:end;
    color:black;
`
export const CommentText = styled.div`
    white-space:pre-line;
    font-family:'Open Sans';
    font-size:1.1rem;
    font-weight:300;
    width:100%;
    padding:.875rem .875rem;
`