import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import * as Location  from 'expo-location';


// IMPORTANT !!!
// Change this to your pc local ip adress for testing !!!
const hostPCipAdress = `192.168.1.4:3000`;
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
  
  const getComments = async (comment) => {
    const res = await fetch(`http://${hostPCipAdress}/comments/${comment}`);
  
    if (res.ok) {
      const data = await res.json();
      return data;
    }
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
  
  function getFavourites() {
    let favorite;
  
    if (typeof window !== 'undefined') {
      favorite = localStorage.getItem('favorite');
      return JSON.parse(favorite);
    }
  }
  
  function addToFavorites(id, title, setModal, modal) {
    let favoriteData;
  
    if (typeof window !== 'undefined') {
      favoriteData = JSON.parse(localStorage.getItem('favorite') || '{}');
    }
    if (localStorage.getItem('favorite') === null) {
      favoriteData = [];
      favoriteData.push({ id: `${id}`, title: `${title}` });
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
      setModal(!modal);
    } else if (localStorage.getItem('favorite')?.length === 0) {
      favoriteData.push({ id: `${id}`, title: `${title}` });
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
      setModal(!modal);
    } else {
        const found = favoriteData.some((fav) => fav.id === id);
      if (!found) {
        favoriteData.push({ id: `${id}`, title: `${title}` });
        localStorage.setItem('favorite', JSON.stringify(favoriteData));
        setModal(!modal);
      }
    }
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
  getAllGardens
};
