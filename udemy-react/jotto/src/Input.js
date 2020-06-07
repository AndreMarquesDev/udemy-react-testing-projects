import React, { Component } from "react"
import { connect } from "react-redux"

class Input extends Component {
    render() {
        const contents = this.props.success && (<form className="form-inline"><input data-test="input-box" /><button data-test="submit-button"></button></form>)
        return <div>
            {contents }
        </div>
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

export default connect(mapStateToProps)(Input);