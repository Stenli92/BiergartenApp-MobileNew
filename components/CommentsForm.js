import React , {useState} from 'react';
import { View , Text , TextInput , TouchableOpacity , StyleSheet} from 'react-native';
import { submitComment } from '../utils/apiDataUtil';
import { useEffect } from 'react';


function CommentsForm({mobileWidth , id}) {

    
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');


  const styles = useStyles(mobileWidth);

  function handleCommentSubmit(){
    submitComment(id , comment , name);
    setComment(''),
    setName('');
  }


    return (
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.label}>
              Name
            </Text>
            <TextInput
              type="text"
              id="name"
              value={name}
              style={styles.name}
              placeholder="Insert your name here..."
              placeholderTextColor={'#8b8b8b'}
              onChangeText={setName}
            />
            <Text style={styles.label}>
              Leave your comment here
            </Text>
            <TextInput
              id="comment"
              name="comment"
              value={comment}
              style={styles.comment}
              placeholder="Insert your name here..."
              placeholderTextColor={'#8b8b8b'}
              onChangeText={setComment}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleCommentSubmit()}>
              <Text style={styles.buttonText} >Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

function useStyles() {

    return StyleSheet.create({
        container: {
          display : 'flex',
          flexDirection: 'column',
          padding: 40,
        },
        form: {
            display : 'flex',
            flexDirection: 'column', 
            gap: 12
        },
        name: {
            color: '#000',
            fontSize:18,
            width: '100%',
            padding: 10,
            borderRadius: 8,
            backgroundColor : '#FFF'
        } ,
        comment: {
            color: '#000',
            fontSize: 18,
            width: '100%',
            padding: 10,
            paddingTop: 0,
            height: 200,
            borderRadius: 8,
            backgroundColor : '#FFF',
            lineHeight : 18
        },
        label : {
            color: '#FFF',
            fontSize: 22,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -10, height: 10},
            textShadowRadius: 10
        },
        placeholder: {
            color: '#8b8b8b',
            fontSize: 13,
            fontStyle: 'italic',
        } , 
        button : {
            padding: 10,
            backgroundColor: '#313b31',
            borderRadius: 8,
            cursor: 'pointer',
            alignSelf: 'center'
        } , 
        buttonText : {
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: 3,
            fontSize: 18,
            color: '#FFF'
        }
       
    });
}


export default CommentsForm;