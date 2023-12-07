import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, View , useWindowDimensions, TouchableOpacity } from 'react-native';

function WelcomeScreen({navigation}) {
  // const {width , height} = useWindowDimensions();
  const styles = useStyles();


    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/home-mobile.png')} style={styles.image} resizeMode="cover">
              <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BeergardenMap')}>
              </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

function useStyles() {

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });
}

export default WelcomeScreen;