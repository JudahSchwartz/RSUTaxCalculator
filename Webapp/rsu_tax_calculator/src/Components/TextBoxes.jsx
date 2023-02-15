import React, { Component } from "react"
import TextBox from "./TextBox"

class TextBoxes extends Component {
    state = {
        textBoxes: [
            { id: 1, headerValue: "Amount of stocks to sell:", boxValue: ""},
            { id: 2, headerValue: "Stock symbol:", boxValue: ""},
            { id: 3, headerValue: "Monthly salary - leave empty if you are not receiving any salary ($)", boxValue: ""},
            { id: 4, headerValue: "Addition income in the current financial year ($)", boxValue: ""},
        ]
    }

    onChangeBoxValue = (event, textBox) => {
        // copy the original textBoxes
        const textBoxes = [...this.state.textBoxes]
        // find the index of the text box that needs to be changed
        const index = textBoxes.indexOf(textBox)
        textBoxes[index].boxValue = event.target.value
        // set the new state
        this.setState({ textBoxes })
    }


    render() {
        return (
        <div>
            {this.state.textBoxes.map(textBox => 
                <TextBox key={textBox.id} textBox={textBox} onChangeBoxValue={this.onChangeBoxValue}></TextBox>)}
        </div>
        )
    }
}

export default TextBoxes