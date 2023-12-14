import React from 'react';
import {View , StyleSheet , Text , Image} from 'react-native';


function Address({styles , address}) {
    return (
        <View style={styles.detailsContainer}>
          <View style={styles.titleAndIcon}>
                <Text style={styles.title}><Image source={require("../assets/address.png")} alt="Address" /> Address / Reservierung</Text>
          </View>
          <Text style={styles.text}>{address}</Text>
        </View>
      );
}
export default Address;