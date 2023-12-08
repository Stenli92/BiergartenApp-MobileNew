import React from 'react';
import { Text , View , StyleSheet , ImageBackground, ScrollView} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GardenDetails from '../components/GardenDetails';
import Address from '../components/Address';
import OpeningTimes from '../components/OpeningTimes';
import Weather from '../components/Weather';


function BeergardenDetails({route , navigation}) {

    const {data} = route.params; 

    const image = require('../assets/garden-background.png')
    console.log(data)
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                {/* {mobileWidth ? '' : <MapGarden />} */}
                 <GardenDetails styles={styles} title={data.title} description={data.description}/>
                <Address styles={styles} />
                <OpeningTimes styles={styles}/>
                <Weather/>
                {/*<CommentsForm mobileWidth={mobileWidth}></CommentsForm>
                <CommentList mobileWidth={mobileWidth}></CommentList> */}
                <Footer navigation={navigation}/>
            </ImageBackground>
        </ScrollView>
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
    },
    detailsContainer : {
        display: 'flex',
        width: '100%',
        flexDirection: 'column', 
        gap: 20,
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleAndIcon : {
        transform : 'translateX(-3rem)'
    },
    text : {
        color: 'white',
        fontSize: 16,
        textAlign: 'left'
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '700',
        display:'flex',
        alignItems: 'center'
    }, 
    icon : {
        height: 22,
        width: 22
    },
 
})