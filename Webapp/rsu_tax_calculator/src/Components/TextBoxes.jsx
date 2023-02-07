import React, { Component } from "react"
import TextBox from "./TextBox"

class TextBoxes extends Component {
    state = {
        textBoxes: [
            { id: 1, headerValue: "Amount of stocks to sell:", textBoxValue: "100"},
            { id: 2, headerValue: "Stock symbol:", textBoxValue: "PANW"},
            { id: 3, headerValue: "Monthly salary - leave empty if you are not receiving any salary ($)", textBoxValue: ""},
            { id: 4, headerValue: "Addition income in the current financial year ($)", textBoxValue: ""},
        ]
    }
    render() {
        return (
        <div>
            {this.state.textBoxes.map(textBox => 
                <TextBox key={textBox.id} headerValue={textBox.headerValue} textBoxValue={textBox.textBoxValue}></TextBox>)}
        </div>
        )
    }
}

export default TextBoxes