import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';

const profile = require('../../../assets/silhouette200.png');

const ProfileScene = () => (
  <View style={styles.scene}>
    {/* TOP */}
    <View style={{
        backgroundColor: '#333333',
        height: 200,
        }}
    >

      <View style={{
          paddingTop: 40,
          paddingLeft: 30,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={profile}
          />
        </TouchableOpacity>
        <View style={{
        paddingLeft: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
        >
          <Text style={{ color: '#ffffff', fontSize: 22, paddingBottom: 5 }}>John Doe</Text>
          <Text style={{ color: '#ffffff', fontSize: 18, paddingBottom: 5 }}>Web UI Developer</Text>
          <Text style={{ color: '#ffffff', fontSize: 18, paddingBottom: 5 }}>john.doe@globant.com</Text>
          <Text style={{ color: '#ffffff', fontSize: 18 }}>Mar del Plata, Argentina</Text>
        </View>


      </View>
    </View>

    <View>
      {/* BODY */}
    </View>
    <View style={{
        backgroundColor: '#403F40',
        height: 500,
      }}
    >
      <Text style={{
color: '#777', fontSize: 15, paddingLeft: 10, paddingTop: 10,
}}
      >JOHN DOE ALSO KNOWS
      </Text>

      {/* SKILL */}
      <View style={{
marginTop: 20, display: 'flex', flexDirection: 'row', paddingLeft: 20,
}}
      >
        <View style={{ width: 80, alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ fontSize: 24, color: '#ffffff', paddingBottom: 10 }}>70%</Text>
        </View>
        <View style={{ width: 400, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#ffffff', paddingBottom: 10 }}>Javascript</Text>
          <View style={{
                width: 120 * 2,
                height: 6,
                backgroundColor: '#666666',
              }}
          >
            <View style={{ width: 80 * 2, height: 6, backgroundColor: '#00AEEF' }} />
          </View>
        </View>
      </View>

      {/* SKILL */}
      <View style={{
marginTop: 20, display: 'flex', flexDirection: 'row', paddingLeft: 20,
}}
      >
        <View style={{ width: 80, alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ fontSize: 24, color: '#ffffff', paddingBottom: 10 }}>20%</Text>
        </View>
        <View style={{ width: 400, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#ffffff', paddingBottom: 10 }}>ES6</Text>
          <View style={{
                width: 120 * 2,
                height: 6,
                backgroundColor: '#666666',
              }}
          >
            <View style={{ width: 20 * 2, height: 6, backgroundColor: '#00AEEF' }} />
          </View>
        </View>
      </View>

      {/* SKILL */}
      <View style={{
 marginTop: 20, display: 'flex', flexDirection: 'row', paddingLeft: 20,
}}
      >
        <View style={{ width: 80, alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ fontSize: 24, color: '#ffffff', paddingBottom: 10 }}>25%</Text>
        </View>
        <View style={{ width: 400, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#ffffff', paddingBottom: 10 }}>Webpack</Text>
          <View style={{
                width: 120 * 2,
                height: 6,
                backgroundColor: '#666666',
              }}
          >
            <View style={{ width: 25 * 2, height: 6, backgroundColor: '#00AEEF' }} />
          </View>
        </View>
      </View>

      {/* SKILL */}
      <View style={{
marginTop: 20, display: 'flex', flexDirection: 'row', paddingLeft: 20,
}}
      >
        <View style={{ width: 80, alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ fontSize: 24, color: '#ffffff', paddingBottom: 10 }}>75%</Text>
        </View>
        <View style={{ width: 400, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#ffffff', paddingBottom: 10 }}>ReactJS</Text>
          <View style={{
                width: 120 * 2,
                height: 6,
                backgroundColor: '#666666',
              }}
          >
            <View style={{ width: 90 * 2, height: 6, backgroundColor: '#00AEEF' }} />
          </View>
        </View>
      </View>

      {/* SKILL */}
      <View style={{
 marginTop: 20, display: 'flex', flexDirection: 'row', paddingLeft: 20,
}}
      >
        <View style={{ width: 80, alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ fontSize: 24, color: '#ffffff', paddingBottom: 10 }}>60%</Text>
        </View>
        <View style={{ width: 400, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#ffffff', paddingBottom: 10 }}>Redux</Text>
          <View style={{
                width: 120 * 2,
                height: 6,
                backgroundColor: '#666666',
              }}
          >
            <View style={{ width: 70 * 2, height: 6, backgroundColor: '#00AEEF' }} />
          </View>
        </View>
      </View>

    </View>
  </View>
);

export default ProfileScene;
