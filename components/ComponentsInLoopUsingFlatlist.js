import React from 'react'
import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native'

const ComponentsInLoopUsingFlatList = () => {

    const users = [
        {
            id: 1,
            name: "Sakshi",
            email: "abc@test.com"
        },
        {
            id: 2,
            name: "Mahak",
            email: "abc@test.com"
        },
        {
            id: 3,
            name: "Khushi",
            email: "abc@test.com"
        },
        {
            id: 4,
            name: "yogita",
            email: "abc@test.com"
        },
        {
            id: 5,
            name: "Tannu",
            email: "abc@test.com"
        },
        {
            id: 6,
            name: "Kalpana",
            email: "abc@test.com"
        },
        {
            id: 7,
            name: "Harshdeep",
            email: "abc@test.com"
        },
        {
            id: 8,
            name: "Himani",
            email: "abc@test.com"
        },
        {
            id: 9,
            name: "Annu",
            email: "abc@test.com"
        },
        {
            id: 10,
            name: "Diksha",
            email: "abc@test.com"
        },
        {
            id: 11,
            name: "Akash",
            email: "abc@test.com"
        },
        {
            id: 12,
            name: "Arun",
            email: "abc@test.com"
        },
        {
            id: 13,
            name: "Alisha",
            email: "abc@test.com"
        },
        {
            id: 14,
            name: "Prashi",
            email: "abc@test.com"
        },
    ]
    return (
        <View>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>Components In Loop Using FlatList List</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />}
            />
        </View>
    );
};

const UserData = () => {
    const item = props.item;
    return (
        <View style={style.box}>
            <Text style={styles.item}>{item.name}
                <Text style={styles.item}>{item.email}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:
    {
        fontSize: 24,
        padding: 10,
        color: 'orange',
        flex: 1,
        margin: 2,
        backgroundColor: 'green',
        textAlign: 'center'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange'

    }
})


export default ComponentsInLoopUsingFlatList;
