import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

const SkillDetails = ({ percentage, skillName }) => {
  const buildSkill = () => (
    <View style={styles.skill}>
      <View style={styles.skillContainer}>
        <Text style={styles.textPercentage}>{percentage}%</Text>
      </View>
      <View style={{ width: 400, paddingLeft: 10 }}>
        <Text style={styles.textSkill}>{skillName}</Text>
        <View style={[{
                  width: 120 * 2,
              }, styles.barContainer]}
        >
          <View style={[{ width: 20 * 2 }, styles.bar]} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.scene}>
      {buildSkill()}
    </View>
  );
};

SkillDetails.propTypes = {
  percentage: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillDetails;
