import React from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
const DynamicGrid = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign:'center' }}>Dynamic Grid using Static Data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.item}>Sakshi</Text>
                <Text style={styles.item}>Diksha</Text>
                <Text style={styles.item}>Khushi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Yogita</Text>
                <Text style={styles.item}>Kritika</Text>
                <Text style={styles.item}>Vandana</Text>
                <Text style={styles.item}>Mahak</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>
                <Text style={styles.item}>Mansi</Text>

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
export default DynamicGrid;