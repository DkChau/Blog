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
    position:absolute;
    background-color:#8ea99b;
    top:0;
    left:0;    
    z-index:-1;
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
export const LinkContainer = styled.div`
    margin-top: 40px;
    width:80%;
    height:100px;
    border:1px solid black;
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
    color:white;
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
