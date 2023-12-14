import { View , StyleSheet , ImageBackground, ScrollView} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GardenDetails from '../components/GardenDetails';
import Address from '../components/Address';
import OpeningTimes from '../components/OpeningTimes';
import Weather from '../components/Weather';
import CommentsForm from '../components/CommentsForm';
import CommentList from '../components/CommentList';
import { getDataById } from '../utils/apiDataUtil';


function BeergardenDetails({route , navigation}) {

    const {id} = route.params; 

    const data = getDataById(id);

    const image = require('../assets/garden-background.png')

    return (
        <View style={styles.container}>
        <ScrollView>
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <Header navigation ={navigation}/>
                <GardenDetails title ={data?.title} description={data?.description} styles={styles} />
                {/* {mobileWidth ? '' : <MapGarden />} */}
                <Address styles={styles} address={data?.address}/>
                <OpeningTimes styles={styles} openingtimes={data?.openingtimes}/>
                <Weather/>
                <CommentsForm ></CommentsForm>
                <CommentList id={id}></CommentList>
            </ImageBackground>
        </ScrollView>
                <Footer navigation={navigation}/>
        </View>
    );
}

export default BeergardenDetails;
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    image : {
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        marginBottom: 40 
    },
    detailsContainer : {
        display: 'flex',
        width: '100%',
        flexDirection: 'column', 
        gap: 20,
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleAndIcon : {
        transform : 'translateX(-3rem)'
    },
    text : {
        color: 'white',
        fontSize: 16,
        textAlign: 'left'
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '700',
        display:'flex',
        alignItems: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -10, height: 10},
        textShadowRadius: 10
    }, 
    icon : {
        height: 22,
        width: 22
    },
 
})