import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component{

    loginHandler = () =>{
        startMainTabs();
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Please Login</Text>
                <Button
                    title="Login"
                    onPress={this.loginHandler}
                />
                <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your E-mail Address"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
                </View>
                <Button
                    title="Submit"

                />
            </View>
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
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
});
export default AuthScreen;