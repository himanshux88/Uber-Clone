const mapService = require('../services/maps.service')
const {validationResult} = require('express-validator')
module.exports.getCoordinates = async(req,res,next) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {address} = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({message:'Coordinates not found'})
        }
}

module.exports.getDistanceAndTime = async (req,res,next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {origin,destination} =req.query
        const distanceAndTime = await mapService.getDistanceTime(origin,destination);
        res.status(200).json(distanceAndTime);
    } catch (error){
        console.log(error);
        res.status(500).json({message:'Error getting distance and time'})
    }

}

module.exports.getSuggestions = async (req,res,next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {input} = req.query
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        console.log(suggestions)
        res.status(200).json(suggestions);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Error getting suggestions'})
    }
}
