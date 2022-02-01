import React from 'react'
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
    ContentRow,

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
                    <ContentRow>
                        <BlogAuthor>By: D. Chau</BlogAuthor>
                        <BlogDate>{props.post.date_formatted}</BlogDate>
                    </ContentRow>      
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
