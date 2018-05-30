import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import profileImg from '../../assets/silhouette200.png';

const Avatar = ({ width, height, imageURI }) => {
  const buildAvatar = () => {
    const image = imageURI || profileImg;
    const borderRadius = height / 2;
    return (
      <TouchableOpacity
        style={[{
                  width,
                  height,
                  borderRadius,
                }, styles.avatar]}
      >
        <Image
          style={{
                    width,
                    height,
                    borderRadius,
                  }}
          source={image}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {buildAvatar()}
    </View>
  );
};

Avatar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imageURI: PropTypes.string,
};

Avatar.defaultProps = {
  imageURI: '',
};

export default Avatar;
