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
    LinkContainer
} from './HomePageElements'
import {CgArrowLongDown} from 'react-icons/cg'

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
                <LinkContainer>Testing redeploy </LinkContainer>
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
