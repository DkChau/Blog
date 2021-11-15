import React, {useState, useEffect} from 'react'
import SingleBlog from '../SingleBlog'
import {useParams} from 'react-router-dom';
import {
    PostContainer, 
    PostWrapper,
    PageLink,
    PageLinkWrapper,
    LinkHeader

} from './AllPostsElements'
import SideBar from '../Sidebar';
import Loading from '../Loading';

const AllPosts = () => {
    const [posts,setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [numPage, setNumPage] = useState([])
    
    const params = useParams();

    useEffect(()=>{
        setLoading(true);
        
        fetch('https://dcblogapi.herokuapp.com/api/post',{})
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                if(data.length && data.length>0){
                    let tempArray=[]
                    for(let i=0; i<(data.length/5); i++){
                        tempArray[i]=i;
                    }
                    setNumPage(tempArray);
                }
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
        <PostContainer>
            <SideBar posts={posts}/>
            <PostWrapper>
                {posts.map((post,index)=>{
                    if(params.num * 5 > posts.length){
                        let howMany = posts.length % 5;
                        let start = posts.length - howMany;

                        if(index>=start){
                            return (
                                <SingleBlog post={post}/>
                            )
                        }
                    }
                    else{
                        let end = 5 * params.num;
                        let start = end - 5;

                        if(index>=start && index <end){
                            return (
                                <SingleBlog post={post}/>
                            )
                        }

                    }
                })} 
            </PostWrapper>
            <PageLinkWrapper>
                <LinkHeader>Page: </LinkHeader>
                {numPage.map((page,index)=>{
                    console.log(params.num, index)
                    return  <PageLink 
                                to={`/post/page/${page+1}`}
                                className={(index+1)==params.num ? 'active' : ''}>
                                {page+1}
                            </PageLink>
                })}
            </PageLinkWrapper>

        </PostContainer>
    )
}

export default AllPosts
