import React, {Component} from 'react';
import {StyleSheet , View,ScrollView,Image,Text,StatusBar,TextInput,TouchableOpacity,Picker,Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';

const BORDER_RADIUS = 40;

var gender = [
    {label:'Male',value:0},
    {label:'Female',value:1}
];

export default class Register extends Component
{
    constructor(){
        super()
        this.state={
            isVisible:false,
            chosenDate:'',
            value:0
        }
    }

    handlePicker = (datetime) =>{
        this.setState({
            isVisible:false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY')
        })
    }

    hidePicker = () =>{
        this.setState({
            isVisible:false
        })
    }

    showPicker = () =>{
        this.setState({
            isVisible:true
        })
    }

    render()
    {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor='#ffffff'
                        barStyle='light-content'
                    />

                    <View style={styles.container1}>
                        <Image
                        style={styles.notifyLogo}
                        source={require('../../../images/notify.png')}
                        />

                        <Text style={styles.txtSignUp}>Sign up</Text>

                        <Text style={styles.txtFullName}>FULL NAME</Text>

                        <TextInput
                        style={styles.input}
                        placeholder="Enter your full name"
                        returnKeyType="next"
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        />

                        <Text style={styles.txtPassword}>PASSWORD</Text>

                        <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        returnKeyType="next"
                        // ref={{input}=>this.passwordInput = input}
                        />
                        
                        <Text style={styles.txtEmail}>E-mail</Text>

                        <TextInput
                        style={styles.input}
                        placeholder="Your e-mail goes here"
                        returnKeyType="next"
                        />

                        <Text>DATE OF BIRTH</Text>

                        <TouchableOpacity style={styles.DOBbutton} onPress={this.showPicker}>
                            <View>
                                <Text>{this.state.chosenDate}</Text>
                            </View> 
                        </TouchableOpacity>

                        <Text style={styles.txtGender}>GENDER</Text>
                        <RadioForm
                            radio_props={gender}
                            initial={-1}
                            onPress={(value)=>{this.setState({value:value})}}
                            formHorizontal={true}
                            labelHorizontal={true}
                            radioStyle={{paddingRight:20}}
                            style={styles.radioBtn}
                        />

                       <Button
                       title="NEXT"
                       color="#383da3"
                       />

                        <DateTimePicker
                            isVisible={this.state.isVisible}
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                            mode={'date'}
                            datePickerModeAndroid={'spinner'}
                        />
                    </View>
                </View>
         </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
    container1:
    {

    },
    notifyLogo:
    {
        width:200,
        height:100
    },
    txtSignUp:
    {
        color:'#383da2',
        fontWeight:'bold',
        fontSize:25,
        paddingBottom:5,
        paddingTop:10
    },
    input:
    {
        height:50,
        marginBottom:20
    },
    DOBbutton:
    {
        padding:0,
        borderWidth:0.5,
        justifyContent:'center',
        height:25
    },
    txtGender:
    {
        paddingTop:20
    },
    radioBtn:
    {
        paddingBottom:20
    }
});