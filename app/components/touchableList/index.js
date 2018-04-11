import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const ListItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress(item)}>
      <Text>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
}

class TouchableList extends Component {

  handlePress = (item) => {
    return () => {
      this.props.onPress(item);
    }
  }

  render() {
      
    return (
      <View style={styles.scene}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => <ListItem item={item} onPress={this.handlePress} />}
        />
      </View>
    );
  }
}

export default TouchableList;