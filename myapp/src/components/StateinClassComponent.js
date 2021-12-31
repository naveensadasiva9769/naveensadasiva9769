import React, { Component } from 'react'
import '../States.css'
export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Naveen",
             count:0
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({
                name:"Naveen N"
            })
        },2000)
        return (
            <div className='demo'>
                <h1>Welcome {this.state.name}</h1>
                <h1>count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1

                    })
                }
            }>
                click To Increment</button>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1

                    })
                }
            }>
                click To Decrement</button>
                <button onClick={()=>{
                    this.setState({
                        count:0

                    })
                }
            }>
                click To Reset</button>
            </div>
        )
    }
}
