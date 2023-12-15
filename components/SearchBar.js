import  {useState} from 'react'
import {StyleSheet, TextInput, View , TouchableOpacity , Image, Pressable} from 'react-native';

function SearchBar({mobileWidth}) {

    const style = handleStyles(mobileWidth);


    const [text, setText] = useState('');
    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Aumeister"
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <View style={style.buttonsContainer}>
                <TouchableOpacity >
                    <Image style={style.icon} source={require('../assets/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText('')} >
                    <Image style={style.icon} source={require('../assets/x.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

function handleStyles(mobileWidth){

    return StyleSheet.create({

        buttonsContainer: {
            display: 'flex',
            flexDirection:'row',
            margin: '1vw',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: mobileWidth ? '98%' : '78%',
            position: 'absolute',
        },
        
        container: {
            zIndex: 1,
            display: 'flex',
            width:  mobileWidth ? "100%" : '80%',
            position: 'absolute',
            backgroundColor: 'white',
            border: 'none',
            flex: 1,
            right: 0
        },
        input: {
            fontSize: 20,
            color: 'black',
            padding: 15,
            marginLeft: 25,
            alignItems: 'center',
            width: '80%',
            zIndex: 9,
    
        },
        icon: {
            height: 22,
            width: 22,
            zIndex: 10,
            margin: 10,
            marginTop: 20
        }
    });
}

export default SearchBar;