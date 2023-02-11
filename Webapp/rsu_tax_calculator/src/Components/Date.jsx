import React, { Component } from "react"


class Date extends Component {
    
    state = {
        headerValue: this.props.headerValue,
        date: this.props.date
    }
    

    handleChange = (event) => {
        this.setState({date: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>{this.state.headerValue}</h3>
                <input type="date" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Date
