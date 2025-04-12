import React, { Component }  from 'react';
import {Button, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Student from './Student';

class StateAndPropsInClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            name : "Sakshi"
        }
    }

    updateName(){
        this.setState({name:val})
    }

    render()
    {
        return(
            <View>
                <Text style = {{color: 'red', fontSize : 30}}>{this.state.name}{this.state.age}</Text>
                <TextInput placeholder='Enter your name' 
                onChangeText={() =>this.updateName(text)}/>
                <Button title = 'Press Me' />
                <Student name = {this.state.name}/>
            </View>
        )
    }
}


export default StateAndPropsInClassComponent;











