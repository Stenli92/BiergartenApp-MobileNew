import React from 'react';
import { Text , View , StyleSheet} from 'react-native';


function BeergardenDetails({route}) {

    const {title , id , distance} = route.params; 


    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{distance}</Text>
        </View>
    );
}

export default BeergardenDetails;
const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})