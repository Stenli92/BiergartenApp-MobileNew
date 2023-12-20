import React from 'react';
import { StyleSheet , View , Text ,TouchableOpacity} from 'react-native';

function AddToFavModal({title , setModal}) {
    return (
        <TouchableOpacity style={styles.overlay} onPress={() => setModal(false)}>
            <View style={styles.modal}>
                <Text style={styles.text}>{title} added to favourites!</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        zIndex: 3,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.377)',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.651)',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
        borderRadius: 6,
        padding: 10
    }, 
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize : 16
    }
})

export default AddToFavModal;