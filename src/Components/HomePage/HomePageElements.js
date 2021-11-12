import styled,{keyframes} from 'styled-components';

const bounce = keyframes`
    0%{
        transform:translateY(-20%)
    }
    50%{
        transform:translateY(0%)
    }
    100%{
        transform:translateY(-20%)
    }
`

export const HomeContainer = styled.div`
    width:100%;
    height:100vh;
    position:relative;
`
export const HomeBackground = styled.svg`
    width:100%;
    height:100%;
`
export const HomeTab = styled.path`
  fill:#697d73;
`
export const LeftSide = styled.div`
    position:absolute;
    left:0;
    top:0;
    display:flex;
    flex-direction: column;
    height:100%;
    width:50%;
    justify-content: center;
    align-items: center;
`
export const Text = styled.span`
    font-family:'PT Mono';
    font-size:2.8rem;
    max-width:700px;
    text-align:center;
    
`
export const RightSide = styled.div`
    position:absolute;
    right:0;
    top:0;
    display:flex;
    height:100%;
    width:64%;
    justify-content: center;
    align-items: center;
`
export const LogoFirstHalf = styled.span`
    font-size:9rem;
    font-weight:700;
    
`
export const LogoSecondHalf = styled.span`
    font-size:9rem;
    font-weight:700;
    color: 	#F5F5F5;
    margin-left: 4rem;
`
export const ArrowContainer = styled.div`
    position:absolute;
    bottom:5%;
    right:2%;
    font-size: 4rem;
    display:flex;
    animation: ${bounce} 2s ease-in-out infinite;
`
export const ArrowText = styled.span`
    display:inline-block;
    font-size:1rem;
    writing-mode:vertical-lr;
`
export const LinkContainer = styled.div`
    margin-top: 40px;
    width:80%;
    height:50px;
    /* border:1px solid black; */
    display:flex;
    align-items: center;
`
export const LinkWrapper = styled.div`
    display:grid;
    width:40%;
    margin:0 auto;
    grid-template-columns: auto 1fr 1fr 1fr;
    grid-gap: 10px;
`
export const Logo = styled.div`
    font-size:1.5rem;
    align-self:center;
`
export const GHLink = styled.a`
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:1.2rem;
    padding:0 10px;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    color:black;

    &:hover{
        color:white;
        background:black;
    }
`