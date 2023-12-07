import React from 'react';
import { Text , View , StyleSheet , ImageBackground} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';


function BeergardenDetails({route , navigation}) {

    const {title , id , distance} = route.params; 

    const image = require('../assets/garden-background.png')
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                {/* {mobileWidth ? '' : <MapGarden />} */}
                {/* <GardenDetails title={title} id={id} distance={distance}/>
                <Address styles={styles} />
                <OpeningTimes styles={styles}/>
                <Weather mobileWidth={mobileWidth}/>
                <CommentsForm mobileWidth={mobileWidth}></CommentsForm>
                <CommentList mobileWidth={mobileWidth}></CommentList> */}
                <Footer navigation={navigation}/>
            </ImageBackground>
        </View>
    );
}

export default BeergardenDetails;
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