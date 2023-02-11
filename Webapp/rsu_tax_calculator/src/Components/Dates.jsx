import React, { Component } from "react"
import Date from "./Date"
 

class Dates extends Component {
    
    state = {
        dates: [
            { "id": 1, date: "", headerValue: "Please enter your grant date"},
            { "id": 2, date: "", headerValue: "Please enter your desired selling date"},
        ]
    }

    onChangeDate = (event, date) => {
        // copy the original dates
        const dates = [...this.state.dates]
        // find the index of the date that needs to be changed
        const index = dates.indexOf(date)
        dates[index].date = event.target.value
        // set the new state
        this.setState({ dates })
    }

    render() {
        return (
            <div>
                {this.state.dates.map(date => 
                    <Date key={date.id} date={date} onChangeDate={this.onChangeDate}></Date>)}
            </div>
            )
    }
}

export default Dates
