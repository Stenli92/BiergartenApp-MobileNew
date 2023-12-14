import React from 'react';
import {View  , Text , Image} from 'react-native';


function OpeningTimes({styles , openingtimes}) {
    return (
        <View style={styles.detailsContainer}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.title}><Image style={styles.icon} source={require("../assets/clock.png")} alt="open-times" /> Offnungszeiten</Text>
          </View>
          <Text style={styles.text}>{openingtimes}</Text>
        </View>
      );
}


export default OpeningTimes;