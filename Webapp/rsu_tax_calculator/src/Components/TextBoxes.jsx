import React, { Component } from "react"
import TextBox from "./TextBox"

class TextBoxes extends Component {
    state = {
        textBoxes: [
            { id: 1, headerValue: "Amount of stocks to sell:", boxValue: "", errorMessage: ""},
            { id: 2, headerValue: "Stock symbol:", boxValue: "", errorMessage: ""},
            { id: 3, headerValue: "Monthly salary - leave empty if you are not receiving any salary ($)", boxValue: "", errorMessage: ""},
            { id: 4, headerValue: "Addition income in the current financial year ($)", boxValue: "", errorMessage: ""},
        ]
    }

    onChangeBoxValue = (event, textBox) => {
        // copy the original textBoxes
        const textBoxes = [...this.state.textBoxes]
        // find the index of the text box that needs to be changed
        const index = textBoxes.indexOf(textBox)

        const textBoxInput = event.target.value
        // index == 1 is a stock symbol which should not be an integer
        if (index != 1 && !Number.isInteger(Number(textBoxInput))) {
            textBoxes[index].errorMessage = "Input must be an integer"
        } else {
            textBoxes[index].errorMessage = ""
        }
        
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