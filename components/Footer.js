import React from 'react';
import { Pressable, View , Image , Text , StyleSheet} from 'react-native';

function Footer({navigation}) {
    const styles = useStyles();

    return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} >
        <Image source={require("../assets/home.png")} alt="back" />
      </Pressable>
     
        <Pressable
          style={styles.pressable} 
        >
          <Image source={require("../assets/fav.png")} alt="fav" />
        </Pressable>
    
      <Pressable
        style={styles.pressable} 
        onPress={() => navigation.navigate('Favourites')}
      >
          <Image  source={require("../assets/gallery.png")} alt="gallery" />
    
      </Pressable>
    </View>
    );
}


function useStyles() {
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 100,
            fontSize: 16,
            overflow: 'hidden',
            justifyContent: 'space-evenly',
            padding: 10,
            position: 'absolute',
            width: '100%',
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.452)',
            height: 'fit-content'
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            color: "#FFF"
        } , 
        pressable : {
            display: 'flex',
            flexDirection: "row"
        }
    })
}

export default Footer;