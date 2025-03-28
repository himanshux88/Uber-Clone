const axios = require('axios');
const captainModel = require('../models/captain.model')

module.exports.getAddressCoordinate = async(address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;

    try {
        const response = await axios.get(url, {
            params: {
                address: address,
                key: apiKey
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching coordinates');
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};


module.exports.getAutoCompleteSuggestions = async(input) => {
    if(!input){
        throw new Error('Input is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input
    )}&types=address&key=${apiKey}`;
    try{
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
          console.log(response)
            return response.data.predictions;
        } else {
            
        }
    }
    catch(error){
        
        throw new Error('Error fetching autocomplete suggestions');
    }
}

module.exports.getCaptainsInTheRadius = async (ltd,lng,radius) =>{
  const captains = await captainModel.find({
    location: {
      $geoWithin:{
        $centerSphere: [[ltd,lng],radius/6371]
      }
    }
  })
  return captains;
}