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

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])
    const [Loading, setLoading] = useState(true);

    const params = useParams();

    //Initial Api call to get post and comments
    useEffect(()=>{
        let postPromise = fetch(`https://dcblogapi.herokuapp.com/api/post/${params.id}`,{})
        let commentPromise = fetch(`https://dcblogapi.herokuapp.com/api/post/${params.id}/comment`,{})

        Promise.all([postPromise, commentPromise])
        .then(([post,comments])=>{
            return Promise.all([post.json(), comments.json()])
        })
        .then(response=>{
            setLoading(false);
            console.log(response);

            if(response[0].errors){
                setErrors(response[0].errors)
            }
            else{
                setPost(response[0])
                setComments(response[1]) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

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
                    <BlogTitle>{post.title}</BlogTitle>       
                    <BlogAuthor>By: D. Chau</BlogAuthor>
                    <BlogDate>Created: {post.date_formatted}</BlogDate>
                    
                </BlogContent>
                <BlogText>{post.text}</BlogText>
                <CommentSection comments={comments}/>
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
