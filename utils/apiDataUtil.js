import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';

// IMPORTANT !!!
// Change this to your pc local ip adress for testing !!!
const hostPCipAdress = `192.168.1.4:3000`;
// IMPORTANT !!!

const getCoordsAndId = () => {
const [coords, setCoords] = useState([]);

  function populateCoords(data) {
    const newCoords = data.map((item) => `${item.coordinates},${item.id},${item.title}`);
    setCoords(newCoords);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${hostPCipAdress}/getdata`);
        if (response.ok) {
          const data = await response.json();
        }
        populateCoords(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return coords;
};

const getGeolocation = () => {
  const [geoLocation, setGeoLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setGeoLocation({
                loaded: true,
                coordinates: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
              });
            },
            (error) => Alert.alert('Error', `Failed to get location: ${error.message}`),
          );
        } else {
          Alert.alert('Location Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  return geoLocation;
};

const getDataById = async (id) => {
    const res = await fetch(`http://${hostPCipAdress}/search/${id}`);
  
    if (res.ok) {
      const data = await res.json();
      return data;
    }
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
  getGeolocation,
  getWeather,
};
