import React from 'react'
import {
    BarContainer,
    HomeLink,
    PostLink,
    PostLinks,
    PostText
} from './SideBarElements'

const SideBar = (props) => {
    return (
        <BarContainer>
            <PostLinks>
                <HomeLink to='/'><PostText>Home</PostText></HomeLink>
                {props.posts.map((post,index)=>{
                    return(
                        <PostLink key={`sidePost${index}`} to={`/post/${post._id}`}><PostText>{post.title}</PostText></PostLink>
                    )
                })}
            </PostLinks>
        </BarContainer>
    )
}

export default SideBar
