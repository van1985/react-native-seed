import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import Avatar from '../avatar';

const ProfileDetails = ({
  name, tech, email, city, country,
}) => {
  const buildProfile = () => (
    <View style={styles.profile} >
      <View style={styles.profileContainer}>
        <Avatar height={100} width={100} />
        <View style={styles.detailContainer}>
          <Text style={[styles.textColorDetails, styles.fontSizeName, styles.paddingDetails]}>
            {name}
          </Text>
          <Text style={[styles.textColorDetails, styles.fontSizeDetails, styles.paddingDetails]}>
            {tech}
          </Text>
          <Text style={[styles.textColorDetails, styles.fontSizeDetails, styles.paddingDetails]}>
            {email}
          </Text>
          <Text style={[styles.textColorDetails, styles.fontSizeDetails]}>
            {city}, {country}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.scene}>
      {buildProfile()}
    </View>
  );
};

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default ProfileDetails;
