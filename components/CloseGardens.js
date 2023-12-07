import React ,{useState}from 'react';
import { Pressable, Text , StyleSheet , ImageBackground  ,View , Image, ScrollView, TouchableOpacity} from 'react-native';

function CloseGardens({navigation}) {

  const [currentPoint, setCurrentPoint] = useState(0);
  const [showClosest , setShowClosest] = useState(true);


    function showIndex(direction) {
        switch (direction) {
          case 'down':
            setCurrentPoint(currentPoint + 5);
            break;
          case 'up':
            setCurrentPoint(currentPoint - 5);
            break;
          default:
            break;
        }
      }

    return (
        <View className="close-gardens" style={showClosest ? styles.container : {display : 'none'}}>
                <View style={styles.showMapButtonContainer}>
                    <Pressable  style={styles.showMapButton} onPress={() => setShowClosest(false)}><Text >Show Beergarden Map</Text></Pressable>
                </View>
                <ScrollView showsVerticalScrollIndicator style={styles.gardensContainer}>

                {closeGardens
                    .sort((a, b) => a.distance - b.distance)
                    .map((data) => (
                    <TouchableOpacity key={data.id} style={styles.garden} onPress={() => navigation.navigate('BiergardenDetails' , {title : data.title , id: data.id , distance: data.distance})}>
                        <ImageBackground style={styles.gardenContainer} source={require('../assets/close-bgarden-back.png')}>

                            <Text className="name" style={styles.distanceAndName} >{data.title}</Text>
                            <View className="distance"  >
                            <Image
                                // style={styles.icon}
                                source={require("../assets/small-location.png")}
                                alt=""
                            />
                            <Text style={styles.distanceAndName}>

                            {data.distance > 1000
                                ? `${(data.distance / 1000).toFixed(0)} km`
                                : `${data.distance.toFixed()} m`}
                            </Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
                {currentPoint > 0 && (
                    <Pressable
                    type="button"
                    style={[styles.buttonArrow ,  {top: 0}]}
                    onPress={() => showIndex('up')}
                    >
                    <Text>

                    &#x2191;
                    </Text>
                    </Pressable>
                )}
                {currentPoint + 5 <= closeGardens.length && (
                    <Pressable
                    type="button"
                    style={[styles.buttonArrow ]}
                    onPress={() => showIndex('down')}
                    >
                    <Text>

                    &#x2193;
                    </Text>
                    </Pressable>
                )}
                </View>
      );
}

export default CloseGardens;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.911)',
        zIndex: 8,
        opacity: 0.9,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem' 
    },
    gardensContainer: {
        marginTop:  '1rem',
        display: 'flex',
        flexDirection: "column",
        height: '100%',
        // gap:1 
    },
    gardenContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'spaceBetween',
        alignItems:'flexEnd',
        padding: '.5rem',
        height: '100%',
        gap: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'white'

    },
    garden: {
        height:'20%',
        gap: 1
    },
    icon : {
        display: 'flex',
        height: 'fit-content',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent:"center",
        width: '100%',
    },
    buttonArrow: {
        textAlign: 'center',
        display: 'flex',
        // position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        width: '3.5rem',
        left: '50%',
        transform: 'translateX:-50%',
        color : 'white'
    },
    showMapButtonContainer: {
        display:'block',
        alignSelf: 'center',
    },
    showMapButton : {
        width: 'fit-content',
        // shadowColor: 'none',
        fontSize: '1rem',
        padding: 1,
        borderTopLeftRadius: 8 ,
        borderTopRightRadius: 8 ,
        backgroundColor: '#8b8b8b',
        color: 'white',
        fontWeight: "bold",
        letterSpacing: '2px'
    },
    distanceAndName : {
        color: '#FFF',
        shadowColor: '#000',
        height: '40px',
        display: 'flex',
        gap: 0.4,
        textOverflow: 'ellipsis',
        overflow: 'hidden', 
        whiteSpace: 'nowrap'
    }
    
  });

const closeGardens = [
    {
        id: 1,
        title: "Title 1",
        distance : 3574
    },
    {
        id: 2,
        title: "Title 2",
        distance : 864
    },
    {
        id: 3,
        title: "Title 3",
        distance : 353
    },
    {
        id: 4,
        title: "Title 4",
        distance : 53
    },
    {
        id: 5,
        title: "Title 5",
        distance : 162
    },
    {
        id: 6,
        title: "Title 6",
        distance : 234
    },
    {
        id: 7,
        title: "Title 7",
        distance : 543
    },
    {
        id: 8,
        title: "Title 8",
        distance : 1652
    },
    {
        id: 9,
        title: "Title 9",
        distance : 2334
    },
]