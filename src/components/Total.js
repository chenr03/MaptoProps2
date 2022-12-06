import React from 'react'

const Total = (props) => {
    // console.log('props', props)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            <h1>{props.cars.length}</h1>
        </div>
    )
}

export default Total