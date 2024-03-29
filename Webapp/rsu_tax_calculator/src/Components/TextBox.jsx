import React, { Component } from "react"

class TextBox extends Component {
    
    render() {
        return (
            <div>
                <h3>{this.props.textBox.headerValue}</h3>
                <input onChange={(event) => this.props.onChangeBoxValue(event, this.props.textBox)}/>
            </div>
        )
    }
}

export default TextBox
