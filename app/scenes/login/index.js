import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { bindActionCreators } from 'redux';
import DataActions from '../../store/data/actions';

import styles from './styles';

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
    let gender;
    if (appData.dataFetched) {
      gender = <Text> {appData.data.gender} </Text>;
    }

    return (
      <View style={styles.scene}>
        <Button
          title="Fake login!"
          onPress={this.goToDemo}
        />
        <Text>
          {gender}
        </Text>
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
