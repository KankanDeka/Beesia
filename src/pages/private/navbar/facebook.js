import React from 'react'

export const Facebook = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.preview.text}</p>
        </div>
    )
}

