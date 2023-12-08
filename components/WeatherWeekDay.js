import React from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';

function WeatherWeekDay({day , temp}) {

    const gsDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const d = new Date(day);
    const dayName = gsDayNames[d.getDay()];

    const styles = handleStyles()

    return (
        <View style={styles.container} >
            <Text style={styles.day}>{dayName}</Text>
            <Text style={styles.temp}>{temp.toFixed(0)}&#xb0;</Text>
        </View>
    );
}

export default WeatherWeekDay;

function handleStyles(){

    return StyleSheet.create({

        container: {
            display: 'flex',
            padding: 10,
            gap: 10
        },
        day : {
            flexWrap: 'wrap',
            fontSize: 26,
            color: "#FFF",
            flexShrink: 0
        },
        temp: {
            flexWrap: 'wrap',
            color: "#FFF",
            fontSize: 40,
        }
    
    })}