import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import placeImage from './src/assets/beach.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';




export default class App extends Component<Props> {

    state = {
        places: [],
        selectedPlace:null
    };

    placeAddedHandler = placeName => {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
                  key: Math.random(),
                  name: placeName,
                  image: placeImage
              })
        };
      })
    };

    placeDeletedHandler = () =>{
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        })
    };

    onModalClosedHandler = ()  => {
        this.setState({
            selectedPlace: null
        })
    };

    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            }
        })

    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.onModalClosedHandler}
                />
                <PlaceInput
                    onPlaceAdded={this.placeAddedHandler}
                />
              <PlaceList
                  places={this.state.places}
                  onItemSelected={this.placeSelectedHandler}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    }
});
