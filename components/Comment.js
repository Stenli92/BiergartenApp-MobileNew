import React from 'react';
import { View , Text , StyleSheet , Image} from 'react-native';


function Comment({comment , mobileWidth}) {

    const styles = useStyles(mobileWidth);

    return (
        <View  style={styles.container}>
            <View style={styles.nameAndTimeContainer}>
                <Text style={styles.nameText}>{comment?.name}</Text>
                <Text style={styles.dateText }>{comment?.dateAndTime}</Text>
            </View>
            <View style={styles.commentTextContainer}>
                <Image style={styles.image} source={require('../assets/comment.png')} alt="comment image" />
                <Text style={styles.commentText} >{comment?.commentText}</Text>
            </View>
        </View>
    );
}

function useStyles(mobileWidth) {

    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%' ,
            backgroundColor: 'rgba(0, 0, 0, 0.450)',
            gap: 10,
            borderRadius: 8,
        },
        nameAndTimeContainer : {
            padding: 10,
            display: 'flex',
            flexDirection: mobileWidth ? 'column' :'row',
            width: 'auto',
            gap: 10,
            
        },
        dateText : {
            color: '#FFF',
            fontSize: 16,
            fontStyle: 'italic',
            color : '#8b8b8b'
        },
        nameText : {
            color: '#FFF',
            fontSize: 16,
            fontStyle: 'italic',
        },
        commentTextContainer : {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 18,
            paddingBottom: 16,
            minHeight: 20,
            marginTop: 10,
            gap: 10,
        },
        commentText: {
            fontSize: 18,
            color: '#8b8b8b',
            flexShrink : 1
        } ,
        image: {
            height: 20,
            width: 20
        }
    });
}

export default Comment;