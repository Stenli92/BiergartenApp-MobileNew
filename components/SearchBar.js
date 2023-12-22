import { useEffect } from 'react';
import  {useState} from 'react'
import {StyleSheet, TextInput,Text, View , TouchableOpacity , Image, Pressable, FlatList} from 'react-native';
import { getDataBySearch } from '../utils/apiDataUtil';

function SearchBar({mobileWidth , navigation}) {

    const style = handleStyles(mobileWidth);


    const [text, setText] = useState('');
    const [data , setData] = useState([]);
    
    async function handleSearch(newText) {
        if (/.{4,}/.test(newText)) {
            setText(newText);
            const result = await getDataBySearch(newText);
            setData(result);

        } else {
            setText(newText);
            setData([]);
        }
    }

    function handleClear() {
        setData([]);
        setText('');
    }

    return (
       
        <View style={style.container}>
            <View>
                <TextInput
                    style={style.input}
                    placeholder="Search garden"
                    onChangeText={newText => handleSearch(newText)}
                    value={text}
                />
                <View style={style.buttonsContainer}>
                    <TouchableOpacity >
                        <Image style={style.icon} source={require('../assets/search.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClear()} >
                        <Image style={style.icon} source={require('../assets/x.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {data.lenght != 0 ?
                <View style={style.searchValue}>
                {data.map((item , index) => {
                return  <TouchableOpacity key={index} style={style.pressable} onPress={() => navigation.navigate('BeergardenDetails' ,  {id : item.id })}>
                    <Text style={style.text} >{item.title}</Text>
                </TouchableOpacity>
                    })}
            </View>
                : '' } 
                
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
        } ,
        searchValue : {
            position: 'absolute',
            backgroundColor: '#FFF',
            width: '100%',
            marginTop: 45
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
            padding: 5
        },
        pressable : {
            height: 40
        }
        
    });
}

export default SearchBar;