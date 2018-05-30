import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import Avatar from '../avatar';

const forward = require('../../assets/icons8-adelante-24.png');


class TouchableList extends Component {
  handlePress = item => () => {
    const { onPress } = this.props;
    onPress(item);
  }

  render() {
    const ListItem = ({ item, index, fnOnpress }) => {
      let color = '#2F2F2F';
      if (index % 2 === 0) {
        color = '#1E1E1E';
      }
      return (
        <TouchableOpacity
          onPress={fnOnpress(item)}
          key={index}
          style={[styles.button, { backgroundColor: color }]}
        >
          <Avatar height={60} width={60} />
          <View style={styles.buttonContainer}>
            <Text style={styles.nameText}>
              {item.find(x => x.name === 'Full Name').value}
            </Text>
            <Text style={styles.valueText}>
              {item.find(x => x.name === 'Technology').value}
            </Text>
          </View>
          <View style={styles.arrowContainer}>
            <Image
              style={styles.arrowImg}
              source={forward}
            />
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View >
        <FlatList
          data={this.props.data}
          renderItem={({ item, index }) =>
            (<ListItem
              item={item}
              index={index}
              fnOnpress={this.handlePress}
            />)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

TouchableList.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default TouchableList;
