import React, { Component } from 'react';
import { connect } from "react-redux";

class About extends Component {
    render() {
        let { information } = this.props
        return (
            <div>
                <h1>About Component</h1>
                <hr />
                <p><strong>Hi, Everyone</strong></p>
                <p>My name is <strong>{information.name}</strong> and i'm <strong>{information.nationality}</strong> programmer</p>
                <p>I'm here to say <strong>JavaScript</strong> changed My life</p>
                <p>Thanks <strong><a href="https://github.com/sizmamani">Sajed</a></strong> :)</p>
                <p>For Everything</p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    information: state.myInfo
})

export default connect(mapStateToProps)(About);