import React, {useState, useEffect} from 'react'
import BlogList from '../Components/BlogList'
import HomePage from '../Components/HomePage'
import Loading from '../Components/Loading';
import { PageContainer } from './PageElements'

const Home = () => {

    const [posts,setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        
        fetch('https://dcblogapi.herokuapp.com/api/post',{})
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                setPosts(data);
                setLoading(false);
            })
            .catch(err=>{
                throw new Error('Failed to fetch api')
            })

    },[])

    if(loading){
        return (
            <Loading/>
        )
    }
    return (
        <PageContainer>
            <HomePage/>
            <BlogList posts={posts}/>
        </PageContainer>
    )
}

export default Home
