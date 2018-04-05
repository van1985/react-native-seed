import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import DataActions from '../../store/data/actions';

import styles from './styles';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { appData } = this.props;
    let gender;
    if (appData.dataFetched) {
      gender = <Text> {appData.data.gender} </Text>;
    }

    return (
      <View style={styles.scene}>
        {gender}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    appData: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: bindActionCreators(DataActions.fetchData, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)