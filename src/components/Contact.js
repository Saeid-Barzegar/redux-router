import React, { Component } from 'react';
import { connect } from "react-redux";

class Contact extends Component {
    render() {
        let { info } = this.props
        return (
            <div>
                <h1>Contact Component</h1>
                <hr />
                <p><strong>Name:</strong> {info.name}</p>
                <p><strong>Nationality:</strong> {info.nationality}</p>
                <p><strong>Job:</strong> {info.job}</p>
                <p><strong>Email Address:</strong> <a href={`mailto:${info.email}`}>{info.email}</a></p>
                <p><strong>LinkedIn Address:</strong> <a href={info.linkedin}>{info.linkedin}</a></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        info: state.myInfo
    }
}

export default connect(mapStateToProps)(Contact);