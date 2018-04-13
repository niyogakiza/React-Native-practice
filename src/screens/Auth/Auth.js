import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
//import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";


class AuthScreen extends Component{

    loginHandler = () =>{
        startMainTabs();
    };

    render(){
        return(

            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>  Please Login </HeadingText>
                    </MainText>
                    <Button
                        title="Login"
                        onPress={this.loginHandler}
                    />
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Your E-mail Address"
                            style={styles.input}
                        />
                        <DefaultInput
                            placeholder="Password"
                            style={styles.input}
                        />
                        <DefaultInput
                            placeholder="Confirm Password"
                            style={styles.input}
                        />
                    </View>
                    <Button
                        title="Submit"
                        onPress={this.loginHandler}
                        style={{backgroundColor:"transparent"}}
                    />
                </View>
            </ImageBackground>

        );
    }

}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer:{
        width: "80%"
    },
    backgroundImage:{
        flex: 1,
        width: "100%"
    },
    input:{
        backgroundColor: "#eee",
        borderColor:"#bbb"
    }
});
export default AuthScreen;