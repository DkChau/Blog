import React from 'react'
import BlogList from '../Components/BlogList'
import HomePage from '../Components/HomePage'
import { PageContainer } from './PageElements'

const Home = () => {
    return (
        <PageContainer>
            <HomePage/>
            <BlogList/>
        </PageContainer>
    )
}

export default Home
