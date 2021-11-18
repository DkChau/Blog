import React from 'react'
import {
    CommentContainer,
    CommentName,
    CommentText,
    CommentHeading,
    CommentWrapper,
    CommentDate,
} from './CommentElements'

const Comment = (props) => {
    return (
        <CommentContainer>
            <CommentHeading>Comment #{props.index + 1}</CommentHeading>
            <CommentWrapper>
                <CommentName>{props.comment.name}</CommentName>
                <CommentDate>{props.comment.date_formatted}</CommentDate>
            </CommentWrapper>
            <CommentText>{props.comment.text}</CommentText>
        </CommentContainer>
    )
}

export default Comment
