import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

import Splash from './Splash';
import Home from './src/components/Home/Home';
import Register from './src/components/Register/Register';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen:'Splash'};
        setTimeout(()=>{
            this.setState({currentScreen:'Home'})
        },3000)
    }

    render(){
        const { currentScreen } = this.state
        let homeScreen = currentScreen === 'Splash' ? <Splash/> : <Home/>
        return homeScreen
    }
}




AppRegistry.registerComponent('NotifyProject1', () => Main);
