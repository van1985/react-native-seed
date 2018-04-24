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

const profile = require('../../assets/silhouette200.png');
const forward = require('../../assets/icons8-adelante-24.png');

const ListItem = ({ item, index, fnOnpress }) => { // eslint-disable-line 
  let color = '#2F2F2F';
  if (index % 2 === 0) {
    color = '#1E1E1E';
  }
  return (
    <TouchableOpacity
      onPress={fnOnpress(item)}
      style={{
      height: 90,
      backgroundColor: color,
      padding: 18,
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
    }}
    >
      <TouchableOpacity
        style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            borderRadius: 60,
          }}
      >
        <Image
          style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
          source={profile}
        />
      </TouchableOpacity>
      <View style={{
        paddingLeft: 40,
        paddingTop: 5,
        flex: 1,
      }}
      >
        <Text style={{
          color: '#FFFFFF',
          fontSize: 16,
        }}
        >
          {item.label}
        </Text>
        <Text style={{
          color: '#FFFFFF',
          paddingTop: 4,
        }}
        >
          Web UI Developer
        </Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
      >
        <Image
          style={{
          width: 30,
          height: 30,
        }}
          source={forward}
        />
      </View>
    </TouchableOpacity>
  );
};

class TouchableList extends Component {
  handlePress = item => () => {
    const { onPress } = this.props;
    onPress(item);
  }

  render() {
    return (
      <View style={styles.scene}>
        <FlatList
          data={this.props.data}
          renderItem={({ item, index }) => <ListItem item={item} index={index} fnOnpress={this.handlePress} />} // eslint-disable-line 
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

TouchableList.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line 

};

export default TouchableList;
