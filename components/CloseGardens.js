import React ,{useState}from 'react';
import { Pressable, Text , StyleSheet , ImageBackground  ,View , Image, ScrollView, TouchableOpacity} from 'react-native';

function CloseGardens({navigation , showClosest , setShowClosest}) {

    return (
        <View className="close-gardens" style={showClosest ? styles.container : {display : 'none'}}>
                <View style={styles.showMapButtonContainer}>
                    <Pressable  style={styles.showMapButton} onPress={() => setShowClosest(false)}><Text >Show Beergarden Map</Text></Pressable>
                </View>
                <ScrollView style={styles.gardensContainer}>

                    {closeGardens
                    .sort((a, b) => a.distance - b.distance)
                    .map((data) => (
                    <TouchableOpacity key={data.id} style={styles.garden} onPress={() => navigation.navigate('BeergardenDetails' , {data : data})}>
                        <ImageBackground style={styles.gardenContainer} source={require('../assets/close-bgarden-back.png')}>

                            <Text className="name" style={styles.distanceAndName} >{data.title}</Text>
                            <View >
                                <Text style={styles.distanceAndName}>
                                    <Image
                                        source={require("../assets/small-location.png")}
                                        alt=""
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

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.911)',
        zIndex: 8,
        opacity: 0.9,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10 
    },
    gardensContainer: {
        display: 'flex',
        flexDirection: "column",
        gap: 10,
        height: '100%',
    },
    gardenContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'spaceBetween',
        alignItems:'flexEnd',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'white',
        borderTopEndRadius: 20,
        borderBottomEndRad: 20
    },
    garden: {
        borderTopEndRadius: 30,
        height: 150,
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
        display:'block',
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
        shadowColor: '#000',
        height: 40,
        display: 'flex',
        gap: 0.4,
        overflow: 'hidden', 
        margin : 20
    }
    
  });

const closeGardens = [
    {
        id: 1,
        title: "Title 1",
        distance : 3574,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'
    },
    {
        id: 2,
        title: "Title 2",
        distance : 864,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'
    },
    {
        id: 3,
        title: "Title 3",
        distance : 353,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'
    },
    {
        id: 4,
        title: "Title 4",
        distance : 53,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'
    },
    {
        id: 5,
        title: "Title 5",
        distance : 162,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'

    },
    {
        id: 6,
        title: "Title 6",
        distance : 234,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'

    },
    {
        id: 7,
        title: "Title 7",
        distance : 543,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'

    },
    {
        id: 8,
        title: "Title 8",
        distance : 1652,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'

    },
    {
        id: 9,
        title: "Title 9",
        distance : 2334,
        description: 'Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.Lorem ipsum dolor sit amet consectetur. Purus in donec lectus scelerisque urna nam ut lectus. Neque pellentesque velit egestas bibendum tortor id. Lacus cursus orci volutpat ornare. Pharetra iaculis elementum mattis nunc tellus lacinia ornare pulvinar.'

    },
]