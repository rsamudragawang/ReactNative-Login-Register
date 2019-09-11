import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import IMAGES from '../../configs/images';
import I186 from '../../i18n';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('OnBoarding');
    }
  }
  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} rezizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I186.t('appName')}</Text>
        <Text style={styles.appVersion}>{I186.t('appVersion')}</Text>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
