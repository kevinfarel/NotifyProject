import React, {Component} from 'react';
import {StyleSheet , View, Image, Text, StatusBar,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component
{
    render()
    {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/* // <View style={styles.container}> */}
                <StatusBar
                    backgroundColor='#ffffff'
                    barStyle='light-content'
                />

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require('../../../images/test.png')}
                    />

                    <Text style={styles.welcome}>Welcome to Notify</Text>
                    <Text style={styles.solution}>Your solution is here!</Text>
                </View>

                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            {/* // </View> */}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex:1
    },

    logoContainer:
    {
        alignItems:'center',
    },

    logo:
    {
        width:150,
        height:150
    },

    welcome:
    {
        color:'#383da2',
        fontWeight:'bold',
        fontSize:30
    },

    solution:
    {
        color:'#a4b0be',
        fontSize:20,
    }
});