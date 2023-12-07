import  {useState} from 'react'
import {StyleSheet, TextInput, View , TouchableOpacity , Image} from 'react-native';

function SearchBar() {

    const style = handleStyles();


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

function handleStyles(){

    return StyleSheet.create({

        buttonsContainer: {
            display: 'flex',
            flexDirection:'row',
            margin: '1vw',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '98vw' ,
            position: 'absolute',
        },
        
        container: {
            zIndex: 1,
            display: 'flex',
            width: "100%",
            position: 'absolute',
            backgroundColor: 'white',
            border: 'none',
            flex: 1,
            right: 0
        },
        input: {
            fontSize: 20,
            color: 'black',
            padding: '1.5rem',
            marginLeft: '2.4rem',
            alignItems: 'center',
            width: '100%',
            zIndex: 9,
    
        },
        icon: {
            height: '27px',
            width: '27px',
            zIndex: 10,
            margin: '1rem',
            marginTop: '1.5rem'
        }
    });
}

export default SearchBar;