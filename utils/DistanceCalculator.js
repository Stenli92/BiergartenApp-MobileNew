import React, { useEffect, useState } from 'react';
import { getCoordsAndId, getGeolocation } from './apiDataUtil';

const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const rad = (x) => x * (Math.PI / 180);

  const R = 6378137;
  const dLat = rad(lat2 - lat1);
  const dLong = rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

const calculateDistance = () => {
    const distances = [];
    const coords = getCoordsAndId();
    const currentLocation = getGeolocation();
  
    coords.map((brewery) => {
      const [lat, lng, id, title] = brewery.split(',');
      const distance = haversineDistance(
        currentLocation.coordinates.lat,
        currentLocation.coordinates.lng,
        parseFloat(lat),
        parseFloat(lng),
      );
  
      const breweryObject = {
        id,
        title,
        distance,
      };
      distances.push(breweryObject);
    });
  
    return distances.sort((a, b) => a.distance - b.distance);
};

export { calculateDistance };
