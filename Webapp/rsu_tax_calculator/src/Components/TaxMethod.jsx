import React, { Component } from "react"
import Dropdown from 'react-bootstrap/Dropdown';

class TaxMethod extends Component {
    
    state = {
        chosenOption: this.props.chosenOption
    }
    

    handleChange = (val) => {
        this.setState({chosenOption: val})
    }

    render() {
        return (
            <div>
                <Dropdown onSelect={this.handleChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {this.state.chosenOption || 'Tax Method'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Fixed">Fixed</Dropdown.Item>
        <Dropdown.Item eventKey="Progessive">Progessive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        )
    }
}

export default TaxMethod
