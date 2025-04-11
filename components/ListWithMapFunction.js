import React from'react'
import { StyleSheet } from'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const App = () =>{

    const users =[
        {   
            id : 1,
            name : "Sakshi"
        },
        {
            i : 2,
            name : "Mahak"
        },
        {
            id : 3,
            name : "Khushi"
        },
        {
            id : 4,
            name : "yogita",
        },
        {
            id : 5,
            name : "Tannu"
        },
        {
            id : 6,
            name : "Kalpana"
        },
        {
            id : 7,
            name : "Harshdeep"
        },
        {
            id : 8,
            name : "Himani"
        },
        {
            id : 9,
            name : "Annu"
        },
        {
            id : 10,
            name : "Diksha"
        }    
    ]
    return (
        <View>
            <Text style = {{fontSize : 31}}>List with Map function</Text>
            <ScrollView  style = {{marginBottom : 50}}>
            {
                users.map((item) =><Text style = {styles.item}>{item.name}</Text>)
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    items:
    {
        fontSize : 24,
        padding : 10,
        color : 'black',
        backgroundColor : 'blue',
        borderColor : 'black',
        borderWidth : 1,
        margin : 10
    }
})
