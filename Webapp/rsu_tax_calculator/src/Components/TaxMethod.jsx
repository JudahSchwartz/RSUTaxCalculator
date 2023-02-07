import React, { Component } from "react"


class TaxMethod extends Component {
    
    state = {
        chosenOption: this.props.chosenOption
    }
    

    handleChange = (event) => {
        console.log(this.state.chosenOption)
        console.log(event.target.value)
        this.setState({chosenOption: event.target.value})
        console.log(this.state.chosenOption)
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value="Fixed">Fixed</option>
                    <option value="Progressive">Progressive</option>
                </select>
            </div>
        )
    }
}

export default TaxMethod
