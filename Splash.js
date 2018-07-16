import React, {Component} from 'react';

import { View , Image , StyleSheet , StatusBar } from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#ffffff'
                    barStyle='light-content'
                />

                <Image style={styles.splashlogo}
                source={require('./images/test.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center'
    },

    splashlogo:
    {
        width:150,
        height:150
    }
});