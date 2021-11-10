import React from 'react'
import BlogPost from '../Components/BlogList'
import HomePage from '../Components/HomePage'
import { PageContainer } from './PageElements'

const Home = () => {
    return (
        <PageContainer>
            <HomePage/>
            <BlogPost/>
        </PageContainer>
    )
}

export default Home
