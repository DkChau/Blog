import React from 'react'
import {
    ListAuthor,
    ListDate,
    ListInfoWrapper,
    ListItem,
    ListText,
    ListTextWrapper,
    ListTitle
} from './SingleBlogElement'

const SingleBlog = (props) => {
    return (
        <ListItem to={`/post/${props.post._id}`}>
            <ListTextWrapper>
                <ListTitle>{props.post.title}</ListTitle>
                <ListText>{props.post.text}</ListText>
            </ListTextWrapper>
            <ListInfoWrapper>
                <ListDate>Posted: {props.post.date_formatted}</ListDate>
                <ListAuthor>By: D. Chau</ListAuthor>
            </ListInfoWrapper>
        </ListItem>
    )
}

export default SingleBlog
