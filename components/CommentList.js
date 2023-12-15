import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import Comment from './Comment';
import { getComments } from '../utils/apiDataUtil';


function CommentList({mobileWidth , id}) {

    const styles = useStyles(mobileWidth);
        
    const comments = getComments(id);

    return (
        <View style={styles.container}>
            {comments?.map((comment , index) => {
                return (
                    <Comment key={index} comment={comment} mobileWidth={mobileWidth} />
                );
            })}
        </View>
    );
}


function useStyles() {

    return StyleSheet.create({
        container: {
            margin: 40,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
        }
    });
}

export default CommentList;