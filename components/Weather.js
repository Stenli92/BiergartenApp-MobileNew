import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';
import WeatherWeekDay from './WeatherWeekDay';


function Weather() {

  
    const [ data , setData] = useState();

    const styles = handleStyles();
          
    const getWeather = async () => {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
        );
    
        if (res.ok) {
          const data = await res.json();
          setData(data);
        }
      };
    
      useEffect(() => {
        getWeather();
      }, []);

    const  weekdays = data?.daily?.time;
    const temperature = data?.daily?.temperature_2m_max;


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.icon} source={require("../assets/sun.png")} alt="sun" />
                <Text style={styles.title}>Weather</Text>
            </View>
            <View style={styles.currentWeatherContainer}>
               <Text style={styles.city}>Munich</Text>
                
                <Text style={styles.temp}>
                {data?.current?.temperature_2m.toFixed(0)}&#xb0;
                </Text>
            </View>
            <View style={styles.weekDayContainer}>
                    { temperature?.map((element, index) => {
                        if (index < 3) {
                            return (
                            <WeatherWeekDay
                                temp={element}
                                day={weekdays[index]}
                                key={index}
                            />
                            );
                        }
                    })}
            </View>
        </View>
    );
}
function handleStyles(){

    return StyleSheet.create({

        container: {
            padding: 30,
            gap: 20,
            width:'100%',
            display: 'flex',
            borderRadius: 8,
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.459)'

        },
        titleContainer : {
            display : 'flex',
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center'

        },
        title: {
            color: '#FFF',
            fontSize: 30,
            fontWeight: '700'
        },
        icon : {
            width: 36,
            height: 36,
            flexShrink: 0
        },
        currentWeatherContainer : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems:'center',
            gap: 20,
            width: 'fit-content'
        },
        city : {
            color: '#FFF',
            fontSize:32,
        },
        temp : {
            color: '#FFF',
            fontSize: 96,
            fontWeight: '700',
        },
        weekDayContainer: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent:'space-evenly',
            fontSize: 32,
            gap: 20,
            color: '#FFF',
            fontSize: 20,
            fontWeight: '700',
        }
    })
}
export default Weather;