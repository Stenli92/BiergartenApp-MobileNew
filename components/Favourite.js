import React from 'react';
import { Text , Image , View , StyleSheet , Pressable , TouchableOpacity} from 'react-native';


function Favourite({title}) {
    return (
        <TouchableOpacity style={style.container} >
            
                <Image style={style.image} source={require('../assets/close-bgarden-back.png')} alt="image" />
                <Text style={style.title}>{title}</Text>
           
                <TouchableOpacity style={style.closeButton}>
                    <Text style={{color : 'white' , height: 20}}> &#10006; </Text>
                </TouchableOpacity>
            
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container : {
        width: '100%',
        fontSize : 18,
        borderRadius: 8,
        display: 'flex',
        flexDirection : 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.651)',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 10
    },
    image: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    closeButton : {
       margin: 10
    },
    title: {
        marginTop: '15%',
        display: 'flex',
        color : 'white',
        textAlign: 'center'
    }
})

export default Favourite;