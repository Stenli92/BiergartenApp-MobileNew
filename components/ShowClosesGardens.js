import React from 'react';
import { StyleSheet , View , Pressable , Text} from 'react-native';

function ShowClosesGardens({setShowClosest , mobileWidth}) {

    const styles = handleStyles(mobileWidth)

    return (
            <View style= {styles.container}>
                <Pressable onPress={() => setShowClosest(true)}><Text style={styles.buttonText}>Show Closest Gardens</Text></Pressable>
            </View>
    );
}

export default ShowClosesGardens;

function handleStyles(){

   return StyleSheet.create({
        container: {
            display: 'flex',
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            padding: 10,
            backgroundColor:'#8b8b8b',
            borderTopLeftRadius: 8 ,
            borderTopRightRadius: 8 ,
        },
        buttonText :{
            color: '#FFF',
            fontWeight: "bold",
            letterSpacing: 2,
        }
      });
}
