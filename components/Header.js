import React from 'react';
import { Image , Pressable , Text ,  View , StyleSheet} from 'react-native';

function Header({navigation}) {
    const styles = handleStyles();
    return (
       
            <View style={styles.container}>
                <Pressable style={styles.titleContainer} onPress={() => navigation.goBack() } >
                    <Image style={styles.image}  source={require("../assets/back.png")} alt="back" />
                    <Text style={styles.title}>  Back </Text>
                </Pressable>
            </View>
        
    );
}

function handleStyles(){
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.568)',
            overflow: 'hidden',
            transition: 'top 0.2s ease-in-out',
            padding: 10
        } ,
        title : {
            display: 'flex',
            fontSize: 18,
            color : '#FFF'
        },
        titleContainer : {
            display : 'flex',
            justifyContent: 'center',
            flexDirection : 'row'

        }
    })
}


export default Header;