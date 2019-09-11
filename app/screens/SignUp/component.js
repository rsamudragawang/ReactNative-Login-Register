/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { Text, View, Image, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Input from '../../components/elements/Input';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      label: '',
      secure: true
    };
  }
  _signIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  };

  _signUp = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.signUp(params);
      const myJSON = JSON.stringify(params);
      alert(myJSON);
      console.log({ result });
      if (result.token.length > 0) {
        this.props.navigation.navigate('Login');
      } else {
        ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.appDetails}>
            <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
            <Text>{I18n.t('appDesc')}</Text>
          </View>
        </View>
        <Input
          label={this.state.label}
          placeholder={I18n.t('email')}
          editable
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <Input
          secure={this.state.secure}
          label={this.state.label}
          placeholder={I18n.t('password')}
          editable
          value={password}
          onChangeText={password => this.setState({ password })}
        />
        <Button type="raised-ripple" title={I18n.t('signUp')} onPress={this._signUp} />
        <View style={styles.margin} />
        <Text onPress={this._signIn}>{I18n.t('haveAccount')}</Text>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
