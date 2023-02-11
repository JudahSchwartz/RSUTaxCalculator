import React, { Component } from "react"


class Date extends Component {
    
    render() {
        return (
            <div>
                <h3>{this.props.date.headerValue}</h3>
                <input type="date" onChange={(event) => this.props.onChangeDate(event, this.props.date)}/>
            </div>
        )
    }
}

export default Date
