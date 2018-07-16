import React, {Component} from 'react';
import {StyleSheet , View, Image, Text, StatusBar,TouchableOpacity} from 'react-native';

const BORDER_RADIUS = 40;

export default class Home extends Component
{
    render(){
        return(
            <View style={styles.container}>
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

                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
                
                <Text style={styles.orContainer}>OR</Text>

                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style={styles.txtJoinUs}>Join Us</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:70
    },
    buttonContainer:
    {
        backgroundColor:'#383da3',
        paddingVertical:10,
        marginBottom:20,
        borderRadius:BORDER_RADIUS
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
        fontSize:30,
        textAlign:'center'
    },

    solution:
    {
        color:'#a4b0be',
        fontSize:20,
        textAlign:'center',
        marginBottom:20
    },
    txtLogin:
    {
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    txtJoinUs:
    {
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    orContainer:
    {
        textAlign:'center',
        fontWeight:'bold',
        paddingVertical:15
    },
});