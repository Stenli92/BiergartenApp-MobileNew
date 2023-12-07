import React from 'react';
import { Text , ImageBackground , View , StyleSheet} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Favourites({navigation}) {
    const image = require('../assets/garden-background.png')

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                <Text>This MF Favourites</Text>
                <Footer navigation={navigation}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    image : {
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%'
    }
})

export default Favourites;