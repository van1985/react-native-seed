'use strict';

import React,{Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import NavBar from './NavBar';
import GiftedListView from './GiftedListView';



import Swiper from 'react-native-swiper';

import I18n from 'react-native-i18n';
import es from '../translations/en';
import en from '../translations/es'; 
I18n.defaultLocale = 'es-ES';
I18n.fallbacks = true;
I18n.translations = {
  en,
  es
}

//import Styles-components
import {Container,
        Slide1,
        Slide2,
        Slide3,
        Title,
        Description,
        Image1,
        Image2,
        Image3} from '../styles/Onboarding';


const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

export default class ReactNativeLogin extends Component {
  render () {
    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
        return (
          <Swiper showsButtons={true}>
            <Slide1>
              <Image1 source={require('../assets/iconos_00_About.png')} ></Image1>
              <Container>
                <Title>{I18n.t('onboarding.slide1_title')}</Title>
                <Description>{I18n.t('onboarding.slide1_description')}</Description>
              </Container>
            </Slide1>
            <Slide2>
              <Image2 source={require('../assets/iconos_02_00_Keyboard_Normal.png')}></Image2>
              <Container>
                <Title>{I18n.t('onboarding.slide2_title')}</Title>
                <Description>{I18n.t('onboarding.slide2_description')}</Description>
              </Container>
            </Slide2>
            <Slide3>
              <Image3 source={require('../assets/iconos_02_01_Keyboard_Numpad.png')}></Image3>
              <Container>
                <Title >{I18n.t('onboarding.slide3_title')}</Title>
                <Description >{I18n.t('onboarding.slide3_description')}</Description>
              </Container>
            </Slide3>
          </Swiper>
        );  
    }
}

/*
        return (
          <View>
            <NavBar/>
            <GiftedListView></GiftedListView>
          </View>
        );  
*/