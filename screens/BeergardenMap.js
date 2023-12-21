import React ,{useEffect, useState} from 'react';
import { View , StyleSheet , useWindowDimensions , Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import MapGoogle from '../components/MapGoogle';
import CloseGardens from '../components/CloseGardens';
import ShowClosesGardens from '../components/ShowClosesGardens';

function BeergardenMap({navigation}) {

  const [showClosest, setShowClosest] = useState(true);

    const {width , height} = useWindowDimensions();
    const mobileWidth = (width < 768);


    return (
        <View style={styles.container} >
            <SearchBar mobileWidth={mobileWidth} navigation={navigation}></SearchBar>
            <CloseGardens mobileWidth={mobileWidth}  showClosest={showClosest} navigation={navigation} setShowClosest={setShowClosest}></CloseGardens>
            <MapGoogle navigation={navigation}></MapGoogle>
            <ShowClosesGardens setShowClosest={setShowClosest}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });

export default BeergardenMap;