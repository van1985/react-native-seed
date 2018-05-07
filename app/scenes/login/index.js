import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import { bindActionCreators } from 'redux';
import DataActions from '../../store/data/actions';

import styles from './styles';

const logo = require('../../assets/logo.png');

class LoginScene extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  componentDidMount() {
    this.props.fetchData();
  }

  goToDemo = () => {
    this.props.navigation.navigate('home');
  }

  render() {
    const { appData } = this.props;
    let gender; // eslint-disable-line 
    if (appData.dataFetched) {
      gender = <Text> {appData.data.gender} </Text>;
    }

    return (
      <View style={styles.scene}>
        <View style={styles.view_logo} >
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
        <View style={styles.view_login_button}>
          <TouchableHighlight
            onPress={this.goToDemo}
            style={styles.login_button}
          >
            <Text style={styles.login_text}>
              Sign In
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.terms_button}
          >
            <Text style={styles.terms_text}>
              Terms and conditions
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

LoginScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  appData: PropTypes.shape({
    data: PropTypes.shape({ gender: PropTypes.string }),
    dataFetched: PropTypes.bool,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    appData: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: bindActionCreators(DataActions.fetchData, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScene);
