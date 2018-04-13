import React from 'react';
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import placeImage from '../../assets/beach.jpeg';

const initialState = {
    places: []

};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: placeImage
                    //     {
                    //     uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
                    // }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
            places: state.places.filter(place => {
                return place.key !== action.placeKey;
            })
            };
        default:
            return state;
     }
};

export default  reducer;