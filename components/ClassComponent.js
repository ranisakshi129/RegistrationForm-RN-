import React, {Component} from 'react';
import {Button, Text, View, TextInput} from 'react-native';

class App extends React.Component{

    render(){
        return (
            <View>
                <Text style = {{fontSize :30 , color :'red'}}>Class Component</Text>
                <TextInput placeholder='Enter your name'/>
                <Button title='Press Me'/>
            </View>
        )
    }

}

export default App;