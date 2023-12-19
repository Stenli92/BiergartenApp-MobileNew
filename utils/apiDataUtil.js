import { useEffect, useState } from 'react';
import * as Location  from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// IMPORTANT !!!
// Change this to your pc local ip adress for testing !!!
const hostPCipAdress = `10.10.1.103:3000`;
// IMPORTANT !!!

const getCoordsAndId = () => {
const [coords, setCoords] = useState([]);
let fetchedDataForAllGardens;

  function populateCoords(data) {
    const newCoords = data.map((item) => `${item.coordinates},${item.id},${item.title}`);
    setCoords(newCoords);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${hostPCipAdress}/getdata`);
        if (response.ok) {
          fetchedDataForAllGardens = await response.json();
        }
        populateCoords(fetchedDataForAllGardens);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return coords;
};

function getAllGardens(){
  const [gardens , setGardens] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://${host}/api/getdata');
        const data = await response.json();
        setGardens(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return gardens;
}

const getGeoLocation = () => {
 
  const [geoLocation , setLocation] = useState({
    coords : {
      latitude : 0,
      longitude: 0
    }
  });

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        coords : {
          latitude: currentLocation.coords.latitude,
          longitude : currentLocation.coords.longitude
        }
      });
    };
    getPermissions();
  }, []);
    
  return geoLocation;
};


const getDataById = (id) => {
  const [data , setData] = useState([]);
  let gardenData;

  useEffect(() => {

    fetchData();
  },[])
  const fetchData = async () => {
    try {
      const res = await fetch(`http://${hostPCipAdress}/search/${id}`);
      if (res.ok) {
        gardenData = await res.json();
        setData(gardenData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return data[0];
  };
  
  const getDataBySearch = async (title) => {
    const res = await fetch(`http://${hostPCipAdress}/textSearch/${title}`);
  
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  };
  
  const getComments = (id) => {
  
    const [data , setData] = useState([]);
    let comments;
  
    useEffect(() => {
      fetchData();
    },[])
    const fetchData = async () => {
      try {
        const res = await fetch(`http://${hostPCipAdress}/comments/${id}`);
        if (res.ok) {
          comments = await res.json();
          setData(comments);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
      return data;
  };

  const submitComment = (id,comment, comentName) => {

    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    let commentData ={
        id:id,
        name: comentName,
        comment: comment,
        date: dateTime
    }

    fetch('http://10.10.1.103:3000/submitComment', {
      method: 'POST',
      headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({commentData})
    });
  };


  const getWeather = async () => {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
    );
  
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  };
  
  const addToFavorites = async (key, value) => {

    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('AsyncStorage#setItem error: ' + error.message);
    }
}


const getFavourites = (value) => {
  const [asyncData , setAsyncData] = useState([]);

  useEffect(() => {

    fetchAsyncData();
  },[])

  const fetchAsyncData = async () => {
    return await AsyncStorage.getItem(value)
    .then((result) => {
        if (result) {
            try {
                result = JSON.parse(result);
                setAsyncData(result);
            } catch (e) {
                console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
            }
        }
        
    });
  };

  return asyncData;
}

export {
  addToFavorites,
  getComments,
  getCoordsAndId,
  getDataById,
  getDataBySearch,
  getFavourites,
  getGeoLocation,
  getWeather,
  getAllGardens,
  submitComment
};
