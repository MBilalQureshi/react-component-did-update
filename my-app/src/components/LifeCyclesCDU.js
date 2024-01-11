import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('Parent constructor')
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }
    updateGreetings = () => {
        console.log('Parent update greeting called')
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye' : 'Hello!',
            }
        })
    }
    componentDidUpdate() {
        console.log('Parent component did update')
    }
    render() {
        console.log('Parent render method')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreetings}>Update Greetings</button>
                <LifeCyclesCDUChild />
            </div>
        )
    }
}

export default LifeCyclesCDU