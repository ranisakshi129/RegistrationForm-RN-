import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Form from './components/Form';
import Lists from './components/Lists';
import ListWithMapFunction from './components/ListWithMapFunction';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Form /> */}
      <Lists />
      <ListWithMapFunction/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
