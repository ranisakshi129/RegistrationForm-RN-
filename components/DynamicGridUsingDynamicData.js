import React from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
const DynamicGridUsingDynamicData = () => {
    
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
            <Text style={{ fontSize: 20, textAlign:'center' }}>Dynamic Grid Dynamic Data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor: 'green',
        color: '#fff',
        margin: 5,
        padding: 5,
        width: 160,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})
export default DynamicGridUsingDynamicData;