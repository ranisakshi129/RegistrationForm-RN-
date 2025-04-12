import React , {Component} from 'react';
import {Button, Text, View, TextInput} from 'react-native';

class Student extends Component{

    render(){

        // Fruit =()=>{
        //     console.log("Apple");
        // }

        return (
            <View>
                <Text style = {{fontSize :30 , color :'red'}}>Class Component</Text>
                <TextInput placeholder='Enter your name'/>
                <Button title='Press Me' onPress={this.Fruit}/>
                <Student/>                                                        
            </View>
        )
    }
 
}

export default Student;