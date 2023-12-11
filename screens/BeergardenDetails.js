import React from 'react';
import { Text , View , StyleSheet , ImageBackground, ScrollView} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GardenDetails from '../components/GardenDetails';
import Address from '../components/Address';
import OpeningTimes from '../components/OpeningTimes';
import Weather from '../components/Weather';
import CommentsForm from '../components/CommentsForm';
import CommentList from '../components/CommentList';


function BeergardenDetails({route , navigation}) {

    const {data} = route.params; 

    const image = require('../assets/garden-background.png')
    return (
        <View style={styles.container}>
        <ScrollView>
            
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                {/* {mobileWidth ? '' : <MapGarden />} */}
                 <GardenDetails styles={styles} title={data.title} description={data.description}/>
                <Address styles={styles} />
                <OpeningTimes styles={styles}/>
                <Weather/>
                <CommentsForm ></CommentsForm>
                <CommentList></CommentList> 
            </ImageBackground>
        </ScrollView>
                <Footer navigation={navigation}/>
        </View>
    );
}

export default BeergardenDetails;
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    image : {
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        marginBottom: 40 
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
        alignItems: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -10, height: 10},
        textShadowRadius: 10
    }, 
    icon : {
        height: 22,
        width: 22
    },
 
})