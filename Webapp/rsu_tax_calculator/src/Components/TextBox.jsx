import React, { Component } from "react"

class TextBox extends Component {
    
    state = {
        headerValue: this.props.headerValue,
        textBoxValue: this.props.textBoxValue
    }

    getTextBoxValue = (event) => {
        this.state.textBoxValue = event.target.value
        console.log(this.state.textBoxValue)
    }

    render() {
        return (
            <div>
                <h3>{this.state.headerValue}</h3>
                <input onChange={this.getTextBoxValue}/>
            </div>
        )
    }
}

export default TextBox
