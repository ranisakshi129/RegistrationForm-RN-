import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const Lists = () => {
  const users = [
    { id: '1', name: 'Sakshi' },
    { id: '2', name: 'Diksha' },
    { id: '3', name: 'Aman' },
    { id: '4', name: 'Khushi' },
    { id: '5', name: 'Taruna' },
    { id: '6', name: 'Adarsh' },
    { id: '7', name: 'Tannu' },
    { id: '8', name: 'Kalpana' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Users List</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    backgroundColor: 'teal',
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 8,
  },
});

export default Lists;
