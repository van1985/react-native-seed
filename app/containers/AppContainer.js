import React , { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';

class AppContainer extends Component {

    render () {
        return <Home {...this.props} />
    }
}

export default connect(() =>  ({})) (AppContainer);