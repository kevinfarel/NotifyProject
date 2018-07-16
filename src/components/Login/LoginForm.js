import React, {Component} from 'react';
import {StyleSheet , View,Text, TextInput, TouchableOpacity,Button} from 'react-native';

const BORDER_RADIUS = 40;

export default class LoginForm extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <TextInput 
                style={styles.input}
                placeholder="Email"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />

                <TextInput 
                style={styles.input}
                placeholder="Password"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                />

                <Button
                title="Login"
                color="#383da3"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        paddingTop:30,
        paddingHorizontal:80
    },

    input:
    {
        height:50,
        marginBottom:20,
        paddingHorizontal:10,
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:BORDER_RADIUS,
        borderColor:'#ced6e0',
        textAlign:'center'
    },

    buttonContainer:
    {
        backgroundColor:'#383da3',
        paddingVertical:10,
        marginBottom:20,
        borderRadius:BORDER_RADIUS
    },

    txtLogin:
    {
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    }
});