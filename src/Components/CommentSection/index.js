import React, {useRef} from 'react'
import {useParams} from 'react-router-dom';
import Comment from '../Comment';
import {
    BlogTitle,
    BlogContainer,
    BlogArea,
    BlogBtn,
    BlogForm,
    BlogInput,
    BlogLabel,
    CommentContainer
} from './CommentSectionElements'

const CommentSection = (props) => {
    const nameRef = useRef(null)
    const textRef = useRef(null)

    let params = useParams();

    const submitComment = (e) =>{
        e.preventDefault()

        fetch(`https://dcblogapi.herokuapp.com/api/post/${params.id}/comment`,
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    name:nameRef.current.value,
                    text:textRef.current.value,
                    id:params.id,
                })
            })
        .then(comment=>{
            return comment.json()
        })
        .then(response=>{
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <BlogContainer className='viewBlogFormContainer'>

            <BlogForm className='createComment'>
                <BlogTitle className='commentTag'>Create Comment</BlogTitle>
                <BlogLabel htmlFor='name'>Name</BlogLabel>
                <BlogInput ref={nameRef} id='name' name='name'></BlogInput>

                <BlogLabel htmlFor='text'>Text</BlogLabel>
                <BlogArea ref={textRef} id='text' name='text'></BlogArea>

                <BlogBtn onClick={submitComment}>Submit Comment</BlogBtn>
            </BlogForm>
            <CommentContainer>
                {props.comments.map((comment,index)=>{
                    return (
                        <Comment key={`comment${index}`} index={index} comment={comment}/>
                    )
                })}
            </CommentContainer>

        </BlogContainer>
    )
}

export default CommentSection
