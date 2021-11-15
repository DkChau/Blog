import React from 'react'
import SingleBlog from '../SingleBlog';
import {
    ListContainer,
    BlogRect,
    BlogSVG,
    ListWrapper,
    ListHeader,
    ViewAll,
    BottomRow,
    Line,
} from './BlogListElements'

const BlogList = (props) => {

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
                {props.posts.map((post,index)=>{
                    if(index>4){
                        return
                    }
                    else{
                        return(
                            <SingleBlog post={post}/>
                        )
                    }

                })}
                <BottomRow>
                    <Line></Line>
                    <ViewAll to='/post/page/1'>View All Posts</ViewAll>
                </BottomRow>
            </ListWrapper>
        </ListContainer>
    )
}

export default BlogList
