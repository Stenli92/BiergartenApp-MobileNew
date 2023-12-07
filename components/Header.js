import React from 'react';
import { Image , Pressable , Text ,  View , StyleSheet} from 'react-native';

function Header({navigation}) {
    const styles = handleStyles();
    return (
       
            <View style={styles.container}>
                <Pressable style={styles.titleContainer} onPress={() => navigation.goBack() } >
                    <Text style={styles.title}><Image  source={require("../assets/back.png")} alt="back" />  Back </Text>
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
            justifyContent: 'space-between',
            transition: 'top 0.2s ease-in-out',
        } ,
        title : {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            marginBottom: 10,
            fontSize: 16,
            color : '#FFF'
        }
    })
}


export default Header;