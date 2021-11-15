import React from 'react'
import { 
    LoadingContainer,
    LoadingCircle,
    LoadingCircle2,
    LoadingCircle3
} from './LoadingElements'

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingCircle/>
            <LoadingCircle2/>
            <LoadingCircle3/>
        </LoadingContainer>
    )
}

export default Loading