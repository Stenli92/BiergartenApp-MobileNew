import React ,{useState}from 'react';
import { Pressable, Text , StyleSheet , ImageBackground  ,View , Image, ScrollView, TouchableOpacity} from 'react-native';
import { calculateDistance } from '../utils/DistanceCalculator';

function CloseGardens({navigation , showClosest , setShowClosest , mobileWidth }) {

    const allGardens = calculateDistance();

    const styles = handleStyles(mobileWidth);

    return (
        <View style={showClosest ? styles.container : {display : 'none'}}>
                <View style={styles.showMapButtonContainer}>
                    <Pressable  style={styles.showMapButton} onPress={() => setShowClosest(false)}><Text >Show Beergarden Map</Text></Pressable>
                </View>
                <ScrollView >
                    {allGardens
                    .map((data) => (
                        <TouchableOpacity key={data.id}  style={styles.garden}  onPress={() => navigation.navigate('BeergardenDetails' , {id : data.id})}>
                                <ImageBackground style = {styles.backGround} source={require('../assets/close-bgarden-back.png')}>
                               
                                <View style={styles.distanceAndNameContainer}>

                                    <Text style={styles.distanceAndName} >{data.title}</Text>
                                    <Text style={styles.distanceAndName}>
                                        <Image 
                                            source={require("../assets/small-location.png")}
                                            alt="image"
                                        />  
                                            {data.distance > 1000
                                                ? `  ${(data.distance / 1000).toFixed(0)} km`
                                                : `  ${data.distance.toFixed()} m`}
                                    </Text>
                                </View>
                             
                            </ImageBackground>
                        </TouchableOpacity>

                    ))}
                </ScrollView>
            </View>
      );
}

export default CloseGardens;

function handleStyles(mobileWidth){

    return StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.911)',
        zIndex: 8,
        opacity: 0.9,
        width: mobileWidth ? '100%' : '20%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: mobileWidth ? 10 : 0 
    },
    gardensContainer: {
        display: 'flex',
        gap: mobileWidth ? 10 : 0,
        // height: '100%',
    },
    gardenContainer: {
        display: 'flex',
        flexDirection: "row",
        height: '20%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'white',
    },
    garden: {
        height : 150,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,

    },
    icon : {
        display: 'flex',
        height: 'fit-content',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent:"center",
        width: '100%',
    },
    showMapButtonContainer: {
        display: mobileWidth ? 'block' : 'none',
        alignSelf: 'center',
    },
    showMapButton : {
        padding: 10,
        borderTopLeftRadius: 8 ,
        borderTopRightRadius: 8 ,
        backgroundColor: '#8b8b8b',
        color: 'white',
        fontWeight: "bold",
        letterSpacing: 2
    },
    distanceAndName : {
        color: '#FFF',
        fontWeight: 'bold',
        shadowColor: '#000',
        height: 'fit-content',
        display: 'flex',
        overflow: 'hidden', 
        padding : 10,
    } ,
    distanceAndNameContainer : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    backGround: {
        display:'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
    }

  })};