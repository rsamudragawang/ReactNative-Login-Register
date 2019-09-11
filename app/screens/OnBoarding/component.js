/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import PropTypes from 'prop-types';
import Swipper from '../../components/elements/Swipper';
import styles from './styles';
import IMAGES from '../../configs/images';
import I186 from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <StatusBar hidden />
        <Swipper onPress={this._onPress}>
          <View style={styles.slide}>
            <View style={styles.logoContainer}>
              <Image source={IMAGES.onBoarding1} rezizeMode="contain" style={styles.logo} />
            </View>
            <Text style={styles.header}>{I186.t('onBoarding.title1')}</Text>
            <Text style={styles.text}>{I186.t('onBoarding.desc1')}</Text>
          </View>

          <View style={styles.slide}>
            <View style={styles.logoContainer}>
              <Image source={IMAGES.onBoarding2} rezizeMode="contain" style={styles.logo} />
            </View>
            <Text style={styles.header}>{I186.t('onBoarding.title2')}</Text>
            <Text style={styles.text}>{I186.t('onBoarding.desc2')}</Text>
          </View>

          <View style={styles.slide}>
            <View style={styles.logoContainer}>
              <Image source={IMAGES.onBoarding3} rezizeMode="contain" style={styles.logo} />
            </View>
            <Text style={styles.header}>{I186.t('onBoarding.title3')}</Text>
            <Text style={styles.text}>{I186.t('onBoarding.desc3')}</Text>
          </View>
        </Swipper>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
