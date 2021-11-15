import React, {useState, useEffect} from 'react'
import BlogPost from '../Components/BlogPost'
import {useParams} from 'react-router-dom';
import { PageContainer } from './PageElements'
import Loading from '../Components/Loading';

const BlogPage = (props) => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true);

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


            if(response[0].errors){
                setErrors(response[0].errors)
                setLoading(false);
            }
            else{
                setPost(response[0])
                setComments(response[1]) 
                setLoading(false);
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    if(loading){
        return (
            <Loading/>
        )
    }
    return (
        <PageContainer>
            <BlogPost comments={comments} post={post}/>
        </PageContainer>
    )
}

export default BlogPage
