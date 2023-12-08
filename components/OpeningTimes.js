import React from 'react';
import {View  , Text , Image} from 'react-native';


function OpeningTimes({styles}) {
    return (
        <View style={styles.detailsContainer}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.title}><Image style={styles.icon} source={require("../assets/clock.png")} alt="open-times" /> Offnungszeiten</Text>
          </View>
          <Text style={styles.text}>12:30 - 16:30</Text>
        </View>
      );
}


export default OpeningTimes;