import { Navigation } from 'react-native-navigation';
import {Provider } from 'react-redux';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

//Register Screens
Navigation.registerComponent(
    "Places.AuthScreen",
    () => AuthScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "Places.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
    );
Navigation.registerComponent(
    "Places.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
    );
Navigation.registerComponent(
    "Places.PlaceDetailScreen",
    () => PlaceDetailScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "Places.SideDrawer",
    () => SideDrawer,
    store,
    Provider
);



//Start App
Navigation.startSingleScreenApp({
    screen: {
        screen: "Places.AuthScreen",
        title: "Login"
    }
});




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {StyleSheet, View} from 'react-native';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
//
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
//
//
//
//
// class App extends Component<Props> {
//
//     placeAddedHandler = placeName => {
//       this.props.onAddPlace(placeName);
//     };
//
//     placeDeletedHandler = () =>{
//         this.props.onDeletePlace();
//     };
//
//     onModalClosedHandler = ()  => {
//         this.props.onDeselectPlace();
//     };
//
//     placeSelectedHandler = key => {
//        this.props.onSelectPlace(key);
//
//     };
//
//     render() {
//
//         return (
//             <View style={styles.container}>
//                 <PlaceDetail
//                     selectedPlace={this.props.selectedPlace}
//                     onItemDeleted={this.placeDeletedHandler}
//                     onModalClosed={this.onModalClosedHandler}
//                 />
//                 <PlaceInput
//                     onPlaceAdded={this.placeAddedHandler}
//                 />
//               <PlaceList
//                   places={this.props.places}
//                   onItemSelected={this.placeSelectedHandler}
//               />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 26,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//
//     }
// });
//
// const mapStateToProps = state => {
//     return {
//         places: state.places.places,
//         selectedPlace: state.places.selectedPlace
//     }
// };
//
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onAddPlace: (name) => dispatch(addPlace(name)),
//         onDeletePlace: ()  => dispatch(deletePlace()),
//         onSelectPlace: (key) => dispatch(selectPlace(key)),
//         onDeselectPlace: () => dispatch(deselectPlace())
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
