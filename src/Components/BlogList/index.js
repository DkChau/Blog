import React, {useState, useEffect} from 'react'
import {
    ListContainer,
    BlogRect,
    BlogSVG,
    ListItem,
    ListWrapper,
    ListTitle,
    ListDate
} from './BlogListElements'

const BlogPost = () => {
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
                >
                </BlogRect>
            </BlogSVG>
            <ListWrapper>
                {posts.map(post=>{
                    return(
                        <ListItem>
                            <ListTitle>{post.title}</ListTitle>
                            <ListDate>Posted: {post.date_formatted}</ListDate>
                        </ListItem>
                    )
                })}

            </ListWrapper>
        </ListContainer>
    )
}

export default BlogPost
