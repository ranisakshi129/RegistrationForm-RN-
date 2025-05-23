import React from'react'
import { StyleSheet, ScrollView, View, Text } from'react-native'

const ListWithMapFunction = () =>{

    const users =[
        {   
            id : 1,
            name : "Sakshi"
        },
        {
            id : 2,
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
        },  
        {
            id : 11,
            name : "Akash"
        },
        {
            id : 12,
            name : "Arun"
        },  
        {
            id : 13,
            name : "Alisha"
        },
        {
            id : 14,
            name : "Prashi"
        },  
    ]
    return (
        <View>
            <Text style = {{fontSize :25, textAlign: 'center'}}>List with Map function</Text>
            <ScrollView  style = {{marginBottom : 50}}>
            {
                users.map((item) =><Text style = {styles.items}>{item.name}</Text>)
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    items:
    {
        fontSize : 20,
        padding : 10,
        color : 'black',
        backgroundColor : 'pink',
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 10,
        margin : 10
    }
})


export default ListWithMapFunction;
