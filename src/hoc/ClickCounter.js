import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

export class ClickCounter extends Component {


    render() {
        const {count, incrementCount}= this.props
        return (
            <div>
                <h2>by using higher-order-component</h2>
                <button onClick={incrementCount}>
                    Click {count}  </button>

                    
            </div>
        )
    }
}

export default withCounter(ClickCounter);
