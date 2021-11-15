import React, {useState, useEffect} from 'react'
import SingleBlog from '../SingleBlog';
import {
    ListContainer,
    BlogRect,
    BlogSVG,
    ListWrapper,
    ListHeader,
    ViewAll
} from './BlogListElements'

const BlogList = () => {
    const [posts,setPosts] = useState([])
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        
        fetch('https://dcblogapi.herokuapp.com/api/post',{})
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                // console.log(data)
                setPosts(data);
                setLoading(false);
            })
            .catch(err=>{
                throw new Error('Failed to fetch api')
            })

    },[])

    return (
        <ListContainer>
            <BlogSVG>
                <BlogRect
                    viewBox="0 0 100 100"
                    x='60%'
                    y='0%'
                    height='100%'
                >
                </BlogRect>
            </BlogSVG>
            <ListWrapper>
                <ListHeader>
                    RECENT POSTS
                </ListHeader>
                {posts.map((post,index)=>{
                    if(index>4){
                        return
                    }
                    else{
                        return(
                            <SingleBlog post={post}/>
                        )
                    }

                })}
                <ViewAll to='/post/page/1'>Test post</ViewAll>
            </ListWrapper>
        </ListContainer>
    )
}

export default BlogList
