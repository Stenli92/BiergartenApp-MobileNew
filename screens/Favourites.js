import React from 'react';
import { Text ,Button, ImageBackground , View , StyleSheet , ScrollView , useWindowDimensions} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Favourite from '../components/Favourite';
import { getFavourites } from '../utils/apiDataUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Favourites({navigation}) {
    const image = require('../assets/garden-background.png')

    const {width , height} = useWindowDimensions();
    const mobileWidth = (width < 768);

const favouritesArray = getFavourites();

removeAppKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      console.log(`Keys: ${keys}`) // Just to see what's going on
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
     console.log(e)
    }
    console.log('Done')
  }

console.log("favorites: ",favouritesArray);


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                <Button
                    onPress={() => removeAppKeys()}
                    title="Remove all"
                />
                <ScrollView style={styles.favourites}>
                    {favouritesArray != null && favouritesArray.length != 0
                    ? favouritesArray.map((favourite , index) => {
                        return <Favourite mobileWidth={mobileWidth} title={favourite.title} key={index} id={favourite.id} navigation={navigation}/>;
                    })
                    : <View style={styles.emptyContainer}><Text style={styles.text}>No favourites added!</Text></View> }
                </ScrollView>
                <Footer navigation={navigation}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        display: 'flex'
    },
    favourites: {
        display:  'flex',
        width: '100%',
        padding: 20
    },
    image : {
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%'
    },
    emptyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'rgba(0, 0, 0, 0.377)',
        padding: 10,
        height : 120,
        width: '100%',
    }, 
    text: {
        fontSize : 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Favourites;