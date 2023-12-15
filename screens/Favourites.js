import React from 'react';
import { Text , ImageBackground , View , StyleSheet , ScrollView , useWindowDimensions} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Favourite from '../components/Favourite';

function Favourites({navigation}) {
    const image = require('../assets/garden-background.png')

    const {width , height} = useWindowDimensions();
    const mobileWidth = (width < 768);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                <ScrollView style={styles.favourites}>
                    {favouritesArray != null && favouritesArray.length != 0
                    ? favouritesArray.map((favourite , index) => {
                        return <Favourite mobileWidth={mobileWidth} title={favourite.title} key={index} />;
                    })
                    : <View className='no-favourites'><Text>No favourites added!</Text></View> }
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
    }
})

const favouritesArray = [
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
    }
    ,
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

    }
    ,
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

    }
]

export default Favourites;