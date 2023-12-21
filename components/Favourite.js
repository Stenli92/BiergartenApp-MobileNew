import React from 'react';
import { Text , Image , View , StyleSheet , Pressable , TouchableOpacity} from 'react-native';
import { getFavourites } from '../utils/apiDataUtil';
import { addFilteredFavorites } from '../utils/apiDataUtil';

function Favourite({title, mobileWidth , id , navigation}) {

    const style = handleStyles(mobileWidth);

    const favourites = getFavourites();

    function handleRemove(){
        const filtered = favourites.filter((fav) => fav.id !== id);
        addFilteredFavorites(filtered);
    }

    return (
        <TouchableOpacity style={style.container} onPress={() => navigation.navigate('BeergardenDetails' ,  {id : id })}>
                <Image style={style.image} source={require('../assets/close-bgarden-back.png')} alt="image" />
                <Text style={style.title}>{title}</Text>
                <TouchableOpacity style={style.closeButton} onPress={() => handleRemove()}>
                    <Text style={{color : 'white' , height: 20}}> &#10006; </Text>
                </TouchableOpacity>
        </TouchableOpacity>
    );
}

function handleStyles(mobileWidth){

    return StyleSheet.create({
    container : {
        width: mobileWidth ? '100%' : "45%",
        fontSize : 18,
        borderRadius: 8,
        display: 'flex',
        flexDirection : 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.651)',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    closeButton : {
        height: '100%',
        marginTop: 10,
        marginRight: 10
    },
    title: {
        display: 'flex',
        color : 'white',
        textAlign: 'center'
    }
})}

export default Favourite;