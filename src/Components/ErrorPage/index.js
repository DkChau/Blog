import React from 'react'
import {
    ErrorContainer,
    ErrorHeader,
    ErrorText,
    ErrorLink
} from './ErrorPageElements'

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorHeader>404</ErrorHeader>
            <ErrorText>Page not found :(</ErrorText>
            <ErrorLink to='/'>Return Home</ErrorLink>
        </ErrorContainer>
    )
}

export default ErrorPage
