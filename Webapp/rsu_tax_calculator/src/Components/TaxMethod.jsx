import React, { Component } from "react"


class TaxMethod extends Component {
    
    state = {
        chosenOption: this.props.chosenOption
    }
    

    handleChange = (event) => {
        this.setState({chosenOption: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>Tax Method</h3>
                <select onChange={this.handleChange}>
                    <option value="Fixed">Fixed</option>
                    <option value="Progressive">Progressive</option>
                </select>
                
            </div>
        )
    }
}

export default TaxMethod
