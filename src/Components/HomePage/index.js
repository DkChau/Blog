import React from 'react'
import {
    HomeBackground,
    HomeContainer,
    HomeTab,
    LeftSide,
    LogoFirstHalf,
    Text,
    RightSide,
    LogoSecondHalf,
    ArrowContainer,
    ArrowText,
    LinkContainer,
    Logo,
    LinkWrapper,
    GHLink,
} from './HomePageElements'
import {CgArrowLongDown} from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

const HomePage = () => {

    return (
        <HomeContainer>
            <HomeBackground viewBox='0 0 100 100' preserveAspectRatio="none meet">
                <HomeTab d='
                    M 100 0
                    V 100 H 60
                    L 70 0'>
                </HomeTab>
            </HomeBackground>
            <LeftSide>
                <Text>Read as a man goes insane trying to create a decent looking blog</Text>
                <LinkContainer>
                    <LinkWrapper> 
                        <Logo><BsGithub/></Logo>
                        <GHLink href='https://github.com/dkchau/BlogApi' target="_blank" rel="noreferrer noopener">API</GHLink>
                        <GHLink href='https://github.com/dkchau/BlogController' target="_blank" rel="noreferrer noopener">Controller</GHLink>
                        <GHLink href='https://github.com/dkchau/Blog' target="_blank" rel="noreferrer noopener">Blog</GHLink>
                    </LinkWrapper>
                </LinkContainer>
            </LeftSide>
            <RightSide>
                <LogoFirstHalf>D.C</LogoFirstHalf>
                <LogoSecondHalf>BLOG</LogoSecondHalf>
                <ArrowContainer>
                    <CgArrowLongDown/>
                    <ArrowText>Scroll Down</ArrowText>
                </ArrowContainer>
            </RightSide>
        </HomeContainer>
    )
}

export default HomePage
