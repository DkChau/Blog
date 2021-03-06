import styled from 'styled-components'

export const BlogContainer = styled.div`
    width:80%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin:0 auto;
`
export const BlogTitle = styled.div`
    font-size:1.8rem;
    font-weight:400;
    padding:.625rem 0;
`
export const BlogForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:90%;
    max-width:35rem;
    max-height:20rem;
    align-items: center;
    /* background:#8ea99b; */
    margin:5rem 0 2.5rem 0;
    padding-bottom:1.25rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;`
export const BlogLabel = styled.label`
    width:90%;
    font-size:1.5rem;
    font-weight:300;
`
export const BlogInput = styled.input`
    width:90%;
    height:1.875rem;
    border:1px solid black;
`
export const BlogArea = styled.textarea`
    width:90%;
    height:9.375rem;
    border:1px solid black;
`
export const BlogBtn = styled.button`
    width:90%;
    height:1.875rem;
    margin-top: .625rem;
    border:1px solid black;
`
export const CommentContainer = styled.div` 
    width:100%;
    &:last-child{
        margin-bottom: 3.125rem;
    }
`