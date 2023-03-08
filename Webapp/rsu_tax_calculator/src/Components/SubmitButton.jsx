import React, { Component } from "react"

class SubmitButton extends Component {
    
    handleChange = (event) => {
        // add an API call to the backend
        // Also get the info from all other components to transferr to the backend
        console.log("Submit Button Clicked")
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <button onClick={this.handleChange}>
                    Submit
                </button>  
            </div>
        )
    }
}

export default SubmitButton