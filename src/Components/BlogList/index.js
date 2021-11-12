import React, {useState, useEffect} from 'react'
import {
    ListContainer,
    BlogRect,
    BlogSVG,
    ListItem,
    ListWrapper,
    ListTitle,
    ListDate,
    ListText,
    ListTextWrapper,
    ListAuthor,
    ListInfoWrapper,
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
                    if(index>3){
                        return
                    }
                    else{
                        return(
                            <ListItem to={`/post/${post._id}`}>
                                <ListTextWrapper>
                                    <ListTitle>{post.title}</ListTitle>
                                    <ListText>{post.text}</ListText>
                                </ListTextWrapper>
                                <ListInfoWrapper>
                                    <ListDate>Posted: {post.date_formatted}</ListDate>
                                    <ListAuthor>By: D. Chau</ListAuthor>
                                </ListInfoWrapper>
                            </ListItem>
                        )
                    }

                })}
                <ViewAll to='/post'>Test post</ViewAll>
            </ListWrapper>
        </ListContainer>
    )
}

export default BlogList
