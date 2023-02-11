import React, { Component } from "react"
import Date from "./Date"
 

class Dates extends Component {
    
    state = {
        textBoxes: [
            { "id": 1, date: "", headerValue: "Please enter your grant date"},
            { "id": 1, date: "", headerValue: "Please enter your desired selling date"},
        ]
    }

    render() {
        return (
            <div>
                {this.state.textBoxes.map(date => 
                    <Date key={date.id} headerValue={date.headerValue}></Date>)}
            </div>
            )
    }
}

export default Dates
