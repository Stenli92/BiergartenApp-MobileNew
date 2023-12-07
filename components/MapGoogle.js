import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View , StyleSheet} from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Image } from 'react-native';


function MapGoogle({navigation}) {

  const icon = require('../assets/beer-marker.png')
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 48.137154,
            latitudeDelta: 0.6,
            longitude: 11.576124,
            longitudeDelta: 0.6,
          }}
        >
          <Marker
          style={styles.marker}
            coordinate={{
              latitude: 48.137154,
              longitude : 11.576124
            }}
            onPress={() => navigation.navigate('BeergardenDetails' ,  {title : "Marker Title " , id: "Marker ID", distance: "Marker Distance"})}
          >
            <Image source={icon}></Image>
          </Marker>
          
        </MapView>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width:'100%',
      height: '100%'
    },
    marker : {
      height : '120px'
    },
    mapOverlay: {
      position: "absolute",
      bottom: 50,
      backgroundColor: "#ffffff",
      borderWidth: 2,
      borderRadius: 5,
      padding: 16,
      left: "25%",
      width: "50%",
      textAlign: "center"
    }
  });

const mapStyle = [
    {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#878787',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f9f5ed',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#aee0f4',
        },
      ],
    },
  ];

export default MapGoogle;