import React, { useState } from 'react';
import { View , StyleSheet , Text , Pressable} from 'react-native';


const GardenDetails = ({ styles , title , description}) => {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <View style={styles.detailsContainer}>
        <View>
          <Text style={[styles.title , {fontSize: 36 }]}>Title: {title}</Text>
        </View>
        {isOpen ? <Text style={styles.text}>{description}</Text> : <Text style={styles.text} numberOfLines={3}>{description}</Text>}
        <Pressable onPress={() => setIsOpen(!isOpen)}><Text style={styles.text}>{isOpen ? "Read less..." : "Read more..."}</Text></Pressable>
    </View>
  );
};

export default GardenDetails;