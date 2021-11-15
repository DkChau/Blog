import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import CommentSection from '../CommentSection';
import { 
    BlogContainer,
    BlogContentWrapper,
    BlogContent,
    BlogDate,
    BlogText,
    BlogTitle,
    BlogAuthor,
    SingleLink,
    LinkContainer,
    IconWrapper,

} from './BlogPostElements';
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'

const BlogPost = (props) => {
    return (
        <BlogContainer>
            <LinkContainer to='/'> 
                <IconWrapper>
                    <HiOutlineArrowNarrowLeft/>
                </IconWrapper>
                <SingleLink>Home</SingleLink>
            </LinkContainer>
            <BlogContentWrapper>
                <BlogContent>
                    <BlogTitle>{props.post.title}</BlogTitle>       
                    <BlogAuthor>By: D. Chau</BlogAuthor>
                    <BlogDate>Created: {props.post.date_formatted}</BlogDate>
                    
                </BlogContent>
                <BlogText>{props.post.text}</BlogText>
                <CommentSection comments={props.comments}/>
            </BlogContentWrapper>
            <LinkContainer to='/post/page/1'> 
                <SingleLink>All Posts</SingleLink>
                <IconWrapper>
                    <HiOutlineArrowNarrowRight/>
                </IconWrapper>
            </LinkContainer>
        </BlogContainer>
    )
}

export default BlogPost
