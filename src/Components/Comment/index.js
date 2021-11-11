import React from 'react'

const Comment = (props) => {
    console.log(props.comment)
    return (
        <div>
            {props.comment.name}
            {props.index}
        </div>
    )
}

export default Comment
