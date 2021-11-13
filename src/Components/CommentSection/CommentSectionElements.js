import styled from 'styled-components'

export const BlogContainer = styled.div`
    width:80%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin:0 auto;
    margin-top:60px;
`
export const BlogTitle = styled.div`
    font-size:2rem;
    font-weight:400;
    padding:10px 0;
`
export const BlogForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:90%;
    max-width:700px;
    align-items: center;
    background:#8ea99b;
    /* border:1px solid black; */
    padding:10px 0 30px 0;
    margin-bottom:100px;
    box-shadow: rgba(60, 64, 67, 0.55) 0px 1px 2px 0px, rgba(60, 64, 67, 0.55) 0px 1px 3px 1px;
`
export const BlogLabel = styled.label`
    width:90%;
    font-size:1.5rem;
    font-weight:300;
`
export const BlogInput = styled.input`
    width:90%;
    height:30px;
    border:1px solid black;
`
export const BlogArea = styled.textarea`
    width:90%;
    height:150px;
    border:1px solid black;
`
export const BlogBtn = styled.button`
    width:90%;
    height:30px;
    margin-top: 10px;
    border:1px solid black;
`
export const CommentContainer = styled.div` 
    width:100%;
    &:last-child{
        margin-bottom: 50px;
    }
`