import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import Comment from './Comment';


function CommentList({mobileWidth}) {

    const styles = useStyles(mobileWidth);


    return (
        <View style={styles.container}>
            {comments?.map((comment) => {
                return (
                    <Comment key={comment.id} comment={comment} mobileWidth={mobileWidth} />
                );
            })}
        </View>
    );
}

const comments = [
    {
    id: 1,
    name: "Chicho",
    dateAndTime: "12:30 11.11.11",
    commentText : "lasdnnldsklinas dkfnsjnakf sdnfuiahisudbf"
    },
    {
    id: 2,
    name: "Asen",
    dateAndTime: "12:23 14.11.11",
    commentText : "lasdnnldsklinas dkfnsjnakf sdnfuiahisudbf"
    },
    {
    id: 3,
    name: "Hasan",
    dateAndTime: "12:23 45.11.11",
    commentText : "lasdnnldsklinas dkfnsjnakf sdnfuiahisudbf"
    }
]

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